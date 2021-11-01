import { Controller, Get } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get()
  async getService(): Promise<object> {
    const service = await this.serviceService.getService();

    return service;
  }
}
