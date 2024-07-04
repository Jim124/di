import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerServcie: PowerService) { }

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power service');
    this.powerServcie.supplyPower(10);
    return a + b;
  }
}
