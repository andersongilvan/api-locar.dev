import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_categories" })
export class CategoryEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({ name: "crated_at", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date
}