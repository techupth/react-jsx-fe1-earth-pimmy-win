import React from 'react';
import { render } from '@testing-library/react';
import Exercise2 from '../src/Exercise2';
import fs from "fs"
import path from "path"

describe("Exercise2", () => {

    it("HTML Element มีการเขียน Attribute ตามหลัก JSX", async () => {
        render(<Exercise2 />);
        const exercisePath = path.join(
            process.cwd(),
            "src/Exercise2/index.jsx"
        );

        const data = await fs.readFileSync(exercisePath, "utf8");
        const regex = /className|htmlFor/g;
        const found = data.match(regex);
        expect(found.length).toBe(4)
    });
});