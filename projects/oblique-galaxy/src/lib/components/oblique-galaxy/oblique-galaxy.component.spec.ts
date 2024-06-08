import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ObliqueGalaxyComponent} from './oblique-galaxy.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique';

describe('ObliqueGalaxyComponent', () => {
	let component: ObliqueGalaxyComponent;
	let fixture: ComponentFixture<ObliqueGalaxyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientModule, BrowserAnimationsModule, MatButtonModule, ObliqueModule]
		}).compileComponents();

		fixture = TestBed.createComponent(ObliqueGalaxyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});


  it('should render the "oblique-galaxy works!" text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('oblique-galaxy works!');
  });

  it('should render the primary button', () => {
    const compiled = fixture.nativeElement;
    const primaryButton = compiled.querySelector('button[obButton="primary"]');
    expect(primaryButton).toBeTruthy();
    expect(primaryButton.textContent).toContain('Primary');
  });

  it('should render the secondary button', () => {
    const compiled = fixture.nativeElement;
    const secondaryButton = compiled.querySelector('button[obButton="secondary"]');
    expect(secondaryButton).toBeTruthy();
    expect(secondaryButton.textContent).toContain('Secondary');
  });

  it('should render the tertiary button', () => {
    const compiled = fixture.nativeElement;
    const tertiaryButton = compiled.querySelector('button[obButton="tertiary"]');
    expect(tertiaryButton).toBeTruthy();
    expect(tertiaryButton.textContent).toContain('Tertiary');
  });

});
