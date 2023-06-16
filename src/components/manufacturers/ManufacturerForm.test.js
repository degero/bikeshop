import React from 'react';
import { render, screen, fireEvent, act, waitFor, getByText } from "@testing-library/react"
import ManufacturerForm from './ManufacturerForm';
import { newManufacturer } from '../../models/manufacturer';

describe('ManufacturerForm', () => {
  let manufacturer;
  let onSave;

  beforeEach(() => {
    manufacturer = {
      id: 1,
      name: 'Acme Corporation',
    };
    onSave = jest.fn();
  });

  it('should render the form with the correct initial values', async () => {
    // ARRANGE
    render(<ManufacturerForm manufacturer={manufacturer} onSave={onSave} />);
    // ASSERT
    expect(await screen.getByLabelText('Manufacturer name:')).toHaveValue(manufacturer.name);
  });

  it('should call the onSave function when the form is submitted', async () => {
    // ARRANGE
    render(<ManufacturerForm manufacturer={manufacturer} onSave={onSave} />);

    // ACT
    fireEvent.submit(screen.getByRole("button"))

    // ASSERT
    expect(await screen.findAllByRole("button")).toHaveLength(1);
    const text = await screen.getByLabelText('Manufacturer name:');
    expect(onSave).toBeCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith({
      name: text.value
    });
  });

  it('should show an error message if the manufacturer name is not provided', async () => {
    // ARRANGE
    render(<ManufacturerForm manufacturer={newManufacturer} onSave={onSave} />);

    // ACT
    fireEvent.submit(screen.getByRole("button"))

    // ASSERT
    expect(await screen.findAllByRole("alert")).toHaveLength(1)
    const error = await screen.findAllByRole("alert");
    expect(error[0]).toHaveTextContent('Manufacturer name is required');

  });
});