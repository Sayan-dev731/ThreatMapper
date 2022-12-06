import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TextInputArea } from '@/components/input/TextInputArea';
import { renderUI } from '@/tests/utils';

describe(`Component TextInputArea`, () => {
  it(`render with placehoder, label, onChange, startIcon, endIcon, helperText, style width`, () => {
    const onChange = vi.fn();
    const { getByTestId, getByPlaceholderText, getByText, getByLabelText } = renderUI(
      <TextInputArea
        placeholder="test@email.com"
        id="id"
        onChange={onChange}
        label="Comments"
        helperText="Put your comments"
        width="w-4/12"
      />,
    );
    expect(getByPlaceholderText('test@email.com')).toBeInTheDocument();

    expect(getByLabelText('Comments')).toBeInTheDocument();

    expect(getByText('Put your comments')).toBeInTheDocument();

    const textInputArea = getByTestId('textinputarea-id');

    expect(textInputArea).toHaveClass('w-4/12');

    // action
    fireEvent.change(textInputArea, { target: { value: 'I am very satisfied' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'I am very satisfied',
        }),
      }),
    );
  });
});