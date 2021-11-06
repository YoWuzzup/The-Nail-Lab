import { Controller, Get } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('technicians')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get()
  async getStaff() {
    const staff = await this.staffService.getStaff();

    return staff;
  }
}
