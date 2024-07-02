import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDTO } from "./dto/create-usuario.dto";
import { UpdatePatchUsuarioDTO } from "./dto/update-patch-usuario.dto";
import { UpdatePutUsuarioDTO } from "./dto/update-put-usuario.dto";

@Controller("usuarios")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDTO: CreateUsuarioDTO) {
    return this.usuarioService.create(createUsuarioDTO);
  }

  @Get()
  async list() {
    return this.usuarioService.listarTodos();
  }

  @Get(":id")
  async show(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.listarUm(id);
  }

  @Put(":id")
  async updateTotal(
    @Body() updatePutUsuarioDTO: UpdatePutUsuarioDTO,
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.usuarioService.update(id, updatePutUsuarioDTO);
  }

  @Patch(":id")
  async updateParcial(
    @Body() updatePatchUsuarioDTO: UpdatePatchUsuarioDTO,
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.usuarioService.update(id, updatePatchUsuarioDTO);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
