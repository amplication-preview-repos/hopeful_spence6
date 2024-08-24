import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CallLogServiceBase } from "./base/callLog.service.base";

@Injectable()
export class CallLogService extends CallLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
