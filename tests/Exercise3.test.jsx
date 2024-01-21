import React from 'react';
import { render } from '@testing-library/react';
import Exercise1 from '../src/Exercise1';
import fs from 'fs'
import path from 'path'

describe("Exercise3", () => {
    it("มีการ Execute ตัว Function getCurrentDateTime()", async () => {
        render(<Exercise1 />);
        const exercisePath = path.join(
            process.cwd(),
            "src/Exercise1/index.jsx"
        );

        const data = await fs.readFileSync(exercisePath, "utf8");
        const regex = /getCurrentDateTime()/g;
        const found = data.match(regex);
        expect(found.length).toBe(2)
    })
})