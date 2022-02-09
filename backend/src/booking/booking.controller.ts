import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getBookings(@Query() query: any) {
    const bookings = await this.bookingService.getBookings(query);

    return bookings;
  }

  @Post()
  async postBooking(@Body() data: any) {
    return this.bookingService.addNewBooking(data);
  }
}
