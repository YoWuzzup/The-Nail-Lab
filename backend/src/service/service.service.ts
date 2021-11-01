import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Service } from './service.model';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel('Service') private readonly serviceModel: Model<Service>,
  ) {}

  async getService() {
    const service = await this.serviceModel.find().exec();

    return service?.map((service) => ({
      id: service.id,
      name: service.name,
      duration: service.duration,
      cost: service.cost,
      image: service.image,
      type: service.type,
    }));
  }
}
