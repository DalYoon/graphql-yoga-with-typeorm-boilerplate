import {
  Column,
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";
import { IsEmail } from "class-validator";
import bcrypt from "bcrypt";

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", nullable: false })
  @IsEmail()
  email: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "text", nullable: false })
  firstName: string;

  @Column({ type: "text", nullable: false })
  lastName: string;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }
}

export default User;
