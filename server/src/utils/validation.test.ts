import { Validation } from './validation';

interface SchemaWithTitle {
  title: string;
}

describe('class Validation', () => {
  it("should throw error if data don't match schema", () => {
    const randomIncorrectData = { description: 'test' };
    const validation = new Validation<SchemaWithTitle>({
      type: 'object',
      required: ['title'],
      properties: {
        title: {
          type: 'string',
        },
      },
    });

    expect(() => {
      validation.validate(randomIncorrectData);
    }).toThrow();
  });

  it('should not throw error if data match schema', () => {
    const randomIncorrectData = { title: 'test' };
    const validation = new Validation<SchemaWithTitle>({
      type: 'object',
      required: ['title'],
      properties: {
        title: {
          type: 'string',
        },
      },
    });

    expect(() => {
      validation.validate(randomIncorrectData);
    }).not.toThrow();
  });
});
