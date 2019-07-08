import { async, TestBed } from '@angular/core/testing';
import { Step3Component } from './step3.component';
describe('Step3Component', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Step3Component]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(Step3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=step3.component.spec.js.map