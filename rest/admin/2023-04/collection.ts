/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Base} from '../../base';
import {ResourcePath} from '../../types';
import {Session} from '../../../lib/session/session';
import {ApiVersion} from '../../../lib/types';

import {Image} from './image';

interface FindArgs {
  session: Session;
  id: number | string;
  fields?: unknown;
}
interface ProductsArgs {
  [key: string]: unknown;
  session: Session;
  id: number | string;
  limit?: unknown;
}

export class Collection extends Base {
  public static apiVersion = ApiVersion.April23;

  protected static resourceName = 'collection';
  protected static pluralName = 'collections';
  protected static hasOne: {[key: string]: typeof Base} = {
    "image": Image
  };
  protected static hasMany: {[key: string]: typeof Base} = {};
  protected static paths: ResourcePath[] = [
    {"http_method": "get", "operation": "get", "ids": ["id"], "path": "collections/<id>.json"},
    {"http_method": "get", "operation": "products", "ids": ["id"], "path": "collections/<id>/products.json"}
  ];

  public static async find(
    {
      session,
      id,
      fields = null
    }: FindArgs
  ): Promise<Collection | null> {
    const result = await this.baseFind<Collection>({
      session: session,
      urlIds: {"id": id},
      params: {"fields": fields},
    });
    return result.data ? result.data[0] : null;
  }

  public static async products(
    {
      session,
      id,
      limit = null,
      ...otherArgs
    }: ProductsArgs
  ): Promise<unknown> {
    const response = await this.request<Collection>({
      http_method: "get",
      operation: "products",
      session: session,
      urlIds: {"id": id},
      params: {"limit": limit, ...otherArgs},
      body: {},
      entity: null,
    });

    return response ? response.body : null;
  }

  public title: string | null;
  public body_html: string | null;
  public handle: string | null;
  public id: number | null;
  public image: Image | null | {[key: string]: any};
  public published_at: string | null;
  public published_scope: string | null;
  public sort_order: string | null;
  public template_suffix: string | null;
  public updated_at: string | null;
}
HTTP/1.1 201 Created
{
  "custom_collection": {
    "id": 1063001312,
    "handle": "ipods-1",
    "title": "IPods",
    "updated_at": "2023-02-02T09:15:15-05:00",
    "body_html": null,
    "published_at": "2023-02-02T09:15:15-05:00",
    "sort_order": "best-selling",
    "template_suffix": null,
    "published_scope": "web",
    "admin_graphql_api_id": "gid://shopify/Collection/1063001312"
  }
}
{
  "body_html": "<p>The best selling iPods ever</p>",
  "handle": "ipods",
  "image": {
    "src": "http://static.shopify.com/collections/ipod.jpg?0",
    "alt": "iPods",
    "width": 500,
    "height": 488,
    "created_at": "2018-04-19T09:34:47-04:00"
  },
  "id": 841564295,
  "published": true,
  "published_at": "2008-02-01T19:00:00-05:00",
  "published_scope": "global",
  "sort_order": "manual",
  "template_suffix": "custom",
  "title": "IPods",
  "updated_at": "2008-02-01T19:00:00-05:00"
}
HTTP/1.1 200 OK
{
  "custom_collections": [
    {
      "id": 841564295,
      "handle": "ipods",
      "title": "IPods",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/841564295",
      "image": {
        "created_at": "2023-02-02T09:09:49-05:00",
        "alt": "MP3 Player 8gb",
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
      }
    },
    {
      "id": 395646240,
      "handle": "ipods_two",
      "title": "IPods Two",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever. Again</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/395646240"
    },
    {
      "id": 691652237,
      "handle": "non-ipods",
      "title": "Non Ipods",
      "updated_at": "2013-02-01T19:00:00-05:00",
      "body_html": "<p>No ipods here</p>",
      "published_at": "2013-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/691652237"
    }
  ]
}HTTP/1.1 200 OK
{
  "custom_collections": [
    {
      "id": 841564295,
      "handle": "ipods",
      "title": "IPods",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/841564295",
      "image": {
        "created_at": "2023-02-02T09:09:49-05:00",
        "alt": "MP3 Player 8gb",
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
      }
    },
    {
      "id": 395646240,
      "handle": "ipods_two",
      "title": "IPods Two",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever. Again</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/395646240"
    },
    {
      "id": 691652237,
      "handle": "non-ipods",
      "title": "Non Ipods",
      "updated_at": "2013-02-01T19:00:00-05:00",
      "body_html": "<p>No ipods here</p>",
      "published_at": "2013-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/691652237"
    }HTTP/1.1 200 OK
{
  "custom_collections": [
    {
      "id": 841564295,
      "handle": "ipods",
      "title": "IPods",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/841564295",
      "image": {
        "created_at": "2023-02-02T09:09:49-05:00",
        "alt": "MP3 Player 8gb",
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
      }
    },
    {
      "id": 395646240,
      "handle": "ipods_two",
      "title": "IPods Two",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever. Again</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/395646240"
    },
    {
      "id": 691652237,
      "handle": "non-ipods",
      "title": "Non Ipods",
      "updated_at": "2013-02-01T19:00:00-05:00",
      "body_html": "<p>No ipods here</p>",
      "published_at": "2013-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/691652237"
    }
HTTP/1.1 200 OK
{
  "custom_collections": [
    {
      "id": 841564295,
      "handle": "ipods",
      "title": "IPods",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/841564295",
      "image": {
        "created_at": "2023-02-02T09:09:49-05:00",
        "alt": "MP3 Player 8gb",
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
      }
    },
    {
      "id": 395646240,
      "handle": "ipods_two",
      "title": "IPods Two",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever. Again</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/395646240"
    },
    {
      "id": 691652237,
      "handle": "non-ipods",
      "title": "Non Ipods",
      "updated_at": "2013-02-01T19:00:00-05:00",
      "body_html": "<p>No ipods here</p>",
      "published_at": "2013-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/691652237"
    }
  HTTP/1.1 200 OK
{
  "custom_collections": [
    {
      "id": 841564295,
      "handle": "ipods",
      "title": "IPods",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/841564295
      ",
      "image": {
        "created_at": "2023-02-02T09:09:49-05:00",
        "alt": "MP3 Player 8gb",
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
      }
    },
    {
      "id": 395646240,
      "handle": "ipods_two",
      "title": "IPods Two",
      "updated_at": "2008-02-01T19:00:00-05:00",
      "body_html": "<p>The best selling ipod ever. Again</p>",
      "published_at": "2008-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/395646240"
    },
    {
      "id": 691652237,
      	"handle": "non-ipods",
      "title": "Non Ipods",
      "updated_at": "2013-02-01T19:00:00-05:00",
      "body_html": "<p>No ipods here</p>",
      "published_at": "2013-02-01T19:00:00-05:00",
      "sort_order": "manual",
      "template_suffix": null,
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Collection/691652237"
    }
  ]
}
HTTP/1.1 200 OK
{
  "custom_collection": {
    "id": 841564295,
    "handle": "ipods",
    "title": "IPods",
    "updated_at": "2008-02-01T19:00:00-05:00",
    "body_html": "<p>The best selling ipod ever</p>",
    "published_at": "2008-02-01T19:00:00-05:00",
    "sort_order": "manual",
    "template_suffix": null,
    "products_count": 1,
    "published_scope": "web",
    "admin_graphql_api_id": "gid://shopify/Collection/841564295",
    "image": {
      "created_at": "2023-02-02T09:09:49-05:00",
      "alt": "MP3 Player 8gb",
      "width": 123,
      "height": 456,
      "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1675346989"
    }
  }
}
HTTP/1.1 200 OK
{
  "count": 3
}
