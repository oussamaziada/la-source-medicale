import { IsString, IsArray, ArrayNotEmpty, ValidateNested, IsUrl, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryEnum } from '../entities/enums/category.enum';

class CreatePhotoDto {
  @IsUrl()
  url: string;
}

export class AddProductDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(CategoryEnum)
  @IsOptional()
  category: CategoryEnum;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhotoDto)
  photos: CreatePhotoDto[];
}
