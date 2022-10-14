/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Base} from '../../../lib/rest/base';
import {ResourcePath} from '../../../lib/rest/types';
import {SessionInterface} from '../../../lib/session/types';
import {ApiVersion} from '../../../lib/base-types';

interface AllArgs {
  [key: string]: unknown;
  session: SessionInterface;
}

export class Balance extends Base {
  public static API_VERSION = ApiVersion.January22;

  protected static NAME = 'balance';
  protected static PLURAL_NAME = 'balances';
  protected static HAS_ONE: {[key: string]: typeof Base} = {};
  protected static HAS_MANY: {[key: string]: typeof Base} = {};
  protected static PATHS: ResourcePath[] = [
    {"http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/balance.json"}
  ];

  public static async all(
    {
      session,
      ...otherArgs
    }: AllArgs
  ): Promise<Balance[]> {
    const response = await this.baseFind<Balance>({
      session: session,
      urlIds: {},
      params: {...otherArgs},
    });

    return response;
  }

}
