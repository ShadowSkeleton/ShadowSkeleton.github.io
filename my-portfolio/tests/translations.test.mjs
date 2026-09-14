import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const source = new URL('../src/', import.meta.url);
const read = path => readFileSync(new URL(path, source), 'utf8');
const zh = JSON.parse(read('i18n/zh.json'));
const projects = JSON.parse(read('data/projects.json'));
const experience = JSON.parse(read('data/experience.json'));

test('all project and experience copy has reviewed Chinese translations', () => {
    for (const item of [...projects, ...experience]) {
        for (const field of ['role', 'summary', 'category', 'organization', 'location', 'date']) {
            if (item[field]) assert.ok(zh[item[field]], `Missing ${field}: ${item[field]}`);
        }
        for (const detail of item.details) {
            assert.ok(zh[detail], `Missing achievement: ${detail}`);
            assert.deepEqual((zh[detail].match(/\d+(?:\.\d+)?/g) || []).sort(), (detail.match(/\d+(?:\.\d+)?/g) || []).sort(), 'Numerical claims must remain unchanged');
            assert.equal((zh[detail].match(/%/g) || []).length, (detail.match(/%/g) || []).length, 'Percentages must remain percentages');
        }
    }
});

test('translated messages retain interpolation placeholders', () => {
    for (const [en, translated] of Object.entries(zh)) {
        assert.ok(translated.trim(), `Empty translation: ${en}`);
        assert.deepEqual((translated.match(/\{\w+\}/g) || []).sort(), (en.match(/\{\w+\}/g) || []).sort(), en);
    }
});

test('literal translation calls resolve in the catalog', () => {
    const files = ['App.jsx', ...readdirSync(new URL('components/', source)).filter(name => name.endsWith('.jsx')).map(name => `components/${name}`)];
    for (const file of files) {
        for (const match of read(file).matchAll(/\bt\(("(?:[^"\\]|\\.)*")/g)) {
            const text = JSON.parse(match[1]);
            assert.ok(Object.hasOwn(zh, text), `Missing translation in ${file}: ${text}`);
        }
    }
});
