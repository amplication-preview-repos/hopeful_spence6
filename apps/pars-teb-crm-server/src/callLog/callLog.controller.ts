import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CallLogService } from "./callLog.service";
import { CallLogControllerBase } from "./base/callLog.controller.base";

@swagger.ApiTags("callLogs")
@common.Controller("callLogs")
export class CallLogController extends CallLogControllerBase {
  constructor(
    protected readonly service: CallLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
