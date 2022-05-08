/*
 * Copyright 2019 Tallence AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import RedirectTargetParameter from "./RedirectTargetParameter";

class RedirectSourceParameter extends RedirectTargetParameter {

  static readonly OPERATOR: string = "operator";

  static readonly OPERATOR_EQUALS: string = "EQUALS";

  constructor(json: any) {
    super(json);
    this[RedirectSourceParameter.OPERATOR] = json[RedirectSourceParameter.OPERATOR];
  }

  getOperator(): string {
    return this[RedirectSourceParameter.OPERATOR];
  }

  override getParametersAsMap(): any {
    const map = super.getParametersAsMap();
    map[RedirectSourceParameter.OPERATOR] = this.getOperator();
    return map;
  }
}

export default RedirectSourceParameter;
