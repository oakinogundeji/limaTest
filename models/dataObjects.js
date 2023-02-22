'use strict';
/**
 * Module dependencies
 */
const Mongoose = require('mongoose');

/**
 * Define Schema
 */
const DataObjectSchema = new Mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
      },
      localCart: {
        lineItems: {
            type: Array,
            default: []
          },
        taxRate: {
            type: Number,
            default: 0.00
          },
        taxDescription: {
            type: String,
            default: ''
          },
        Tax: {
            type: String,
            default: ''
          },
        taxCalculated: {
            type: Boolean,
            default: false
          },
        subTotal: {
            type: Number,
            default: 0.00
          },
        shippingSurcharge: {
            type: Number,
            default: 0.00
          },
        shippingTotal: {
            type: Number,
            default: 0.00
          },
        taxTotal: {
            type: Number,
            default: 0.00
          },
        lineItemTotal: {
            type: Number,
            default: 0.00
          },
        discountType: {
            type: String,
            default: ''
          },
        discountValue: {
            type: Number,
            default: 0.00
          },
        discountTotal: {
            type: Number,
            default: 0.00
          },
        discountSubtotal: {
            type: Number,
            default: 0.00
          },
        discountFreeShipping: {
            type: Boolean,
            default: false
          },
        freeShippingMinimum: {
            type: Number,
            default: 0.00
          },
        total: {
            type: Number,
            default: 0.00
          },
        taxableAmount: {
            type: Number,
            default: 0.00
          }
      },
    locale: {
        type: String,
        default: "en-US"
        },
    cartCurrency: {
        type: String,
        default: "USD"
        },
    shippingZone: {
        type: String,
        default: "TR"
        },
    checkedOut: {
        type: Boolean,
        default: true
        },
    couponCode: {
        type: String,
        default: ""
        },
    authorized: {
        type: Boolean,
        default: false
        },
    sentToShopify: {
        type: Boolean,
        default: true
        },
    primaryVariantId: {
        type: String,
        default: ""
        },
    checkoutPageName: {
        type: String,
        default: ""
        },
    checkoutPageParams: {
    utm_content: {
        type: String,
        default: ""
        }
    },
    auxPageName: {
        type: String,
        default: ""
        },
    landingPageName: {
        type: String,
        default: ""
        },
    funnelName: {
        type: String,
        default: ""
        },
    advertorialPageName: {
        type: String,
        default: ""
        },
    billingAddress: {
    zip: {
        type: String,
        default: "06401"
        },
    country: {
        type: String,
        default: "US"
        },
    province: {
        type: String,
        default: "CT"
        },
    address2: {
        type: String,
        default: "Aprt 2"
        },
    city: {
        type: String,
        default: "Fakeville"
        },
    phone: {
        type: String,
        default: "203-555-1212"
        },
    address1: {
        type: String,
        default: "123 Fake St"
        },
    last_name: {
        type: String,
        default: "Order"
        },
    first_name: {
        type: String,
        default: "Test"
        }
    },
    shippingAddress: {
        zip: {
            type: String,
            default: "06401"
            },
        country: {
            type: String,
            default: "US"
            },
        province: {
            type: String,
            default: "CT"
            },
        address2: {
            type: String,
            default: "Aprt 2"
            },
        city: {
            type: String,
            default: "Fakeville"
            },
        phone: {
            type: String,
            default: "203-555-1212"
            },
        address1: {
            type: String,
            default: "123 Fake St"
            },
        last_name: {
            type: String,
            default: "Order"
            },
        first_name: {
            type: String,
            default: "Test"
            }
        }
});

/**
 * Compile Schema to Model
 */
const DataObjectModel = Mongoose.model('DataObject', DataObjectSchema);

/**
 * Export DataObjectModel
 */
module.exports = DataObjectModel;