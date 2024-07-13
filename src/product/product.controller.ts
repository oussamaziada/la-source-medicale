import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  
  
  @Post('add')
  create(@Body() addProductDto: AddProductDto /* , @User() user */) {
    return this.productService.create(addProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto/* , @User() user */) {
    return this.productService.update(+id, updateProductDto/* , user */);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Get(':id')
  findByCategory(@Param('id') id: string) {
    return this.productService.findByCategory(+id);
  }
  
}

