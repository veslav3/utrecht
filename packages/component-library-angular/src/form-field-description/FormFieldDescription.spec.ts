import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { render } from '@testing-library/angular';
import { clearElements } from '../utils';
import { UtrechtFormFieldDescription } from './component';

afterEach(() => {
  clearElements();
});

describe('Form Field Description', () => {
  it('renders an HTML div element', async () => {
    const fixture = TestBed.createComponent(UtrechtFormFieldDescription);
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<utrecht-form-field-description></utrecht-form-field-description>', {
      declarations: [UtrechtFormFieldDescription],
    });
    const field = container.querySelector('div');
    expect(field).toHaveClass('utrecht-form-field-description');
  });

  describe('variant for a message that describes why the form control is invalid', () => {
    it('renders a design system BEM class name', async () => {
      const { container } = await render(
        '<utrecht-form-field-description [invalid]="true"></utrecht-form-field-description>',
        {
          declarations: [UtrechtFormFieldDescription],
        },
      );
      const field = container.querySelector('div');
      expect(field).toHaveClass('utrecht-form-field-description--invalid');
    });
  });

  describe('variant for a message that mentions the form control has become valid', () => {
    it('renders a design system BEM class name', async () => {
      const { container } = await render(
        '<utrecht-form-field-description [valid]="true"></utrecht-form-field-description>',
        {
          declarations: [UtrechtFormFieldDescription],
        },
      );
      const field = container.querySelector('div');
      expect(field).toHaveClass('utrecht-form-field-description--valid');
    });
  });

  describe('variant for a warning that is provided with a form control', () => {
    it('renders a design system BEM class name', async () => {
      const { container } = await render(
        '<utrecht-form-field-description [warning]="true"></utrecht-form-field-description>',
        {
          declarations: [UtrechtFormFieldDescription],
        },
      );
      const field = container.querySelector('div');
      expect(field).toHaveClass('utrecht-form-field-description--warning');
    });
  });

  it('displays as CSS block element', async () => {
    const { container } = await render('<utrecht-form-field-description></utrecht-form-field-description>', {
      declarations: [UtrechtFormFieldDescription],
    });
    const field = container.querySelector('div');
    expect(field).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', async () => {
    const { container } = await render(
      '<utrecht-form-field-description><strong>Current</strong> password</utrecht-form-field-description>',
      {
        declarations: [UtrechtFormFieldDescription],
      },
    );

    const desc = container.querySelector('div');
    expect(desc).toBeInTheDocument();
  });

  it('can be hidden', async () => {
    const { container } = await render('<utrecht-form-field-description hidden></utrecht-form-field-description>', {
      declarations: [UtrechtFormFieldDescription],
    });

    const desc = container.querySelector('div');
    expect(desc).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { fixture } = await render(
      '<utrecht-form-field-description class="custom-class"></utrecht-form-field-description>',
      {
        declarations: [UtrechtFormFieldDescription],
      },
    );
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field-description'));
    expect(debugElement.nativeElement).toHaveClass('custom-class');
  });

  it('can have a additional class name', async () => {
    const { fixture } = await render(
      '<utrecht-form-field-description class="custom-class"></utrecht-form-field-description>',
      {
        declarations: [UtrechtFormFieldDescription],
      },
    );
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.utrecht-form-field-description'));
    expect(debugElement.nativeElement).toHaveClass('custom-class');
    expect(debugElement.nativeElement).toHaveClass('utrecht-form-field-description');
  });
});
