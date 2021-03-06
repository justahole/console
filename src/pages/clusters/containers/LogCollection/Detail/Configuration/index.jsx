/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { observer } from 'mobx-react'
import { get } from 'lodash'

import { Card } from 'components/Base'
import Attributes from 'core/containers/Base/Detail/BaseInfo/Attributes'

import collectionConfig from '../../config'

import styles from './index.scss'

@observer
export default class AuthorityList extends React.Component {
  render() {
    const detail = this.props.detailStore || {}
    const { isLoading, HTTP_User, HTTP_Password, Name } = detail
    const pathGetter = get(collectionConfig, `${Name}.pathGetter`, () => {})
    const path = pathGetter(detail)

    return (
      <Card loading={isLoading}>
        <Attributes className={styles.attributes}>
          <Attributes.Item
            className={styles.item}
            key="address"
            name={t('Address')}
            value={path}
          />
          {Name === 'es' && (
            <div>
              <Attributes.Item
                className={styles.item}
                key="user"
                name={t('Username')}
                value={HTTP_User}
              />
              <Attributes.Item
                key="password"
                name={t('Password')}
                value={HTTP_Password}
                className={styles.item}
              />
            </div>
          )}
        </Attributes>
      </Card>
    )
  }
}
