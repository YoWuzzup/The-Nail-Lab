import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async getBookings() {
    const bookings = await this.bookingService.getBookings();

    return bookings;
  }
}
