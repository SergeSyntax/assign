import { UserInputError } from 'apollo-server-core';
import { Validation } from './validation';
import * as Ajv from 'ajv';

interface SchemaWithTitle {
  title: string;
}

const schema: Ajv.JSONSchemaType<SchemaWithTitle> = {
  type: 'object',
  required: ['title'],
  properties: {
    title: {
      type: 'string',
    },
  },
};

const getValidationInstance = () => new Validation<SchemaWithTitle>(schema);

describe('class Validation', () => {
  it('should populate schema attribute on instantiation', () => {
    const validation = getValidationInstance();

    expect(validation.schema).toEqual(schema);
  });

  it("should throw error if data don't match schema", () => {
    const randomIncorrectData = { description: 'test' };
    const validation = getValidationInstance();

    expect(() => {
      validation.validate(randomIncorrectData);
    }).toThrow(UserInputError);
  });

  it('should not throw error if data match schema', () => {
    const randomIncorrectData = { title: 'test' };
    const validation = getValidationInstance();

    expect(() => {
      validation.validate(randomIncorrectData);
    }).not.toThrow();
  });
});
