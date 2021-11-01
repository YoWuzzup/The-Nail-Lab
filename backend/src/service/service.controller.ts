import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('treatments')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get()
  async getService(@Query() query: Record<string, any>): Promise<object> {
    const service = await this.serviceService.getService(query);

    return service;
  }

  @Get(`:name`)
  getOneService(@Param('name') serviceName: string) {
    return this.serviceService.getSingleService(serviceName);
  }
}
