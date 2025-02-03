import { render, screen } from '@testing-library/react';
import Price from '../Price';

describe('Price', () => {
  it('должен корректно форматировать цену', () => {
    render(<Price amount={10} currency="USD" locale="en-US" />);
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});
