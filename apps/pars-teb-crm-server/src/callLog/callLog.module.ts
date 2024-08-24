import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CallLogModuleBase } from "./base/callLog.module.base";
import { CallLogService } from "./callLog.service";
import { CallLogController } from "./callLog.controller";
import { CallLogResolver } from "./callLog.resolver";

@Module({
  imports: [CallLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [CallLogController],
  providers: [CallLogService, CallLogResolver],
  exports: [CallLogService],
})
export class CallLogModule {}
