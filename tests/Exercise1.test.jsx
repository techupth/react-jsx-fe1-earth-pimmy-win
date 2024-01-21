import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise1 from '../src/Exercise1';

describe("Exercise1", () => {
    it('HTML Element ใส่ className ได้ตามกำหนด', () => {
        render(<Exercise1 />);

        const div = document.querySelectorAll("div")
        expect(div[1]).toHaveClass('article')
        expect(screen.getByText('TechUp Thailand')).toHaveClass('article-title');
        expect(screen.getByText('เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน')).toHaveClass('article-body');
        expect(screen.getByText('techupth.com')).toHaveClass('article-link');
        expect(div[2]).toHaveClass('bootcamp-start-time')

    });

})