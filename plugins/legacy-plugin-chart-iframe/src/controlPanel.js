/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';
import { ColumnOption} from '@superset-ui/chart-controls';

export default {
  controlPanelSections: [
    {
      label: t('Options'),
      controlSetRows: [
        [
          {
            name: 'url',
            config: {
              type: 'TextControl',
              label: t('URL'),
              description: t(
                'The URL, this control is templated, so you can integrate ' +
                  '{{ width }} and/or {{ height }} in your URL string.',
              ),
              default: '',
            },
          },
          {
            name: 'all_columns',
            config: {
              type: 'SelectControl',
              label: t('Columns'),
              description: t('Columns to display'),
              multi: true,
              freeForm: true,
              allowAll: true,
              commaChoosesOption: false,
              default: [],
              optionRenderer: c => <ColumnOption showType column={c} />,
              valueRenderer: c => <ColumnOption column={c} />,
              valueKey: 'column_name',
              mapStateToProps: ({ datasource, controls }) => ({
                options: datasource?.columns || [],
              }),
            },
          },
        ],
      ],
    },
  ],
  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [],
    },
    sqlaTimeSeries: {
      controlSetRows: [],
    },
  },
};
