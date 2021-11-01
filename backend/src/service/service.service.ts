import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Service } from './service.model';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel('Service') private readonly serviceModel: Model<Service>,
  ) {}

  async getService(@Query() query: Record<string, any>): Promise<object> {
    let service: any;

    if (query.sort) {
      service = await this.serviceModel
        .find({
          type: query.sort,
        })
        .exec();
    } else {
      service = await this.serviceModel.find().exec();
    }

    return service?.map((service) => ({
      id: service.id,
      name: service.name,
      duration: service.duration,
      cost: service.cost,
      image: service.image,
      type: service.type,
    }));
  }

  async getSingleService(serviceName: string) {
    const service = await this.serviceModel.find({ name: serviceName }).exec();

    return {
      ...service,
    };
  }

  private async findService(id: string): Promise<Service> {
    let service;

    try {
      service = await this.serviceModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find the Service');
    }
    if (!service) {
      throw new NotFoundException('Could not find the Service');
    }

    return service;
  }
}
