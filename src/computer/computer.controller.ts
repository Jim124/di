import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuServcie: CpuService,
    private diskServcie: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuServcie.compute(1, 2), this.diskServcie.getData()];
  }
}
