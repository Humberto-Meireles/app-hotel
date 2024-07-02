import { Injectable } from "@nestjs/common";
import { CreateUsuarioDTO } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";

@Injectable()
export class UsuarioService {
  listarUm(id: number) {
    throw new Error("Method not implemented.");
  }
  listarTodos() {
    throw new Error("Method not implemented.");
  }
  create(createUsuarioDto: CreateUsuarioDTO) {
    return "This action adds a new usuario";
  }


  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
