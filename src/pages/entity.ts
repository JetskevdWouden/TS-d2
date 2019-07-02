import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {BaseEntity} from 'typeorm/repository/BaseEntity'
import { IsString, Length } from 'class-validator';

@Entity()
export default class Page extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Length(5, 25)
    @Column('text')       //, {nullable:false}
    title: string

    @IsString()
    @Length(10)
    @Column('text')       //, {nullable:false}
    content: string
}