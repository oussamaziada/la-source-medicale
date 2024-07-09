import { IsString, IsArray, ArrayNotEmpty, ValidateNested, IsUrl, IsEnum, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryEnum } from '../entities/enums/category.enum';

class CreatePhotoDto {
  @IsUrl()
  url: string;
}

export class AddProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(CategoryEnum)
  @IsNotEmpty()
  category: CategoryEnum;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePhotoDto)
  photos: CreatePhotoDto[];
}
