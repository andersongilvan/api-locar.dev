import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_specifications" })
export class SpecificationEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({ name: "crated_at", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date
}