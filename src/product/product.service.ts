import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>)
        {}
    
    
    async create(productData: AddProductDto): Promise<Partial<ProductEntity>> {
    const product = this.productRepository.create({
      ...productData
    });
    /* if (await this.usersRepository.findOne({ where: { username: club.username } })) {
      throw new ConflictException(`Le username doit être unique`);
    }
    club.salt = await bcrypt.genSalt();
    club.password = await bcrypt.hash(club.password, club.salt);
    try {
      await this.clubRepository.save(club);
    } catch (e) {
      throw new ConflictException(`Le username doit être unique`);
    } */
    return {
        id: product.id,
        category: product.category,
        description: product.description
      } ;
    }

    async update(id: number, updateProductDto: UpdateProductDto/* , user */) {
        const productToUpdate = await this.productRepository.preload({
          id,
          ...updateProductDto
        });
        if(! productToUpdate) {
            throw new NotFoundException(`Le club d'id ${id} n'existe pas`);
        }
        /* if (user.id === id || user.role === UserRoleEnum.ADMIN) */
            return await this.productRepository.save(productToUpdate);
         /*  else
            throw new UnauthorizedException(`Vous n'avez pas le droit de modifier ce produit`); */
      
      }

      findAll() {
        return this.productRepository.find();
      }

      async findOne(id: number) {
        const product= await this.productRepository.findOneBy({ id });
        console.log(product);
        return product
    
      }





}


