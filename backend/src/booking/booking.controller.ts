import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getBookings(@Query() query: any) {
    const bookings = await this.bookingService.getBookings(query);

    return bookings;
  }

  // @Get()
  // async singleStaffBookings(@Query() query: any) {
  //   console.log(query);

  //   const bookings = await this.bookingService.singleStaffBookings(query.staff);

  //   return bookings;
  // }
}
