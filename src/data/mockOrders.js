import pantodacImg from '../assets/PANTODAC.jpg';
import nexproImg from '../assets/NEXPRO L CAP.jpg';
import doloImg from '../assets/DOLO 650.jpg';
import vitaminCImg from '../assets/VITAMIN C.jpg';
import n95Img from '../assets/N95.jpg';
import sanitizerImg from '../assets/Sanitizer.jpg';
import bandageImg from '../assets/BANDAGE.jpg';
import glucometerImg from '../assets/GLUCOMETER.jpg';
import testStripsImg from '../assets/TEST STRIPS.jpg';

export const mockOrders = [
    {
        id: 'CPONMHY2412281048758',
        date: 'Sat, Dec 28, 2024 10:48 PM',
        status: 'Delivered',
        deliveredDate: 'Sun, Dec 29, 2024, 13:15',
        totalAmount: '427.93',
        items: [
            { name: 'PANTODAC 40MG TABLET', discountPrice: '33', mrp: '170.50', qty: '1 Pack / 15 Units', total: '142.70', image: pantodacImg },
            { name: 'Nexpro L Cap', discountPrice: '33', mrp: '315.50', qty: '1 Pack / 10 Units', total: '264.05', image: nexproImg }
        ],
        pricing: {
            subTotal: '486.00',
            discount: '-83.07',
            serviceCharges: '+25.00',
            total: '427.93'
        },
        edit: [
            { productName: 'PANTODAC 40MG TABLET', reason: 'Out of Stock', orderedQty: '2 Pack / 30 Units', refundedQty: '1 Pack / 15 Units', refundAmount: '142.70', approvedDate: '29 Dec, 2024', image: pantodacImg }
        ]
    },
    {
        id: 'CPONMHY2412281048759',
        date: 'Mon, Jan 01, 2025 09:30 AM',
        status: 'Delivered',
        deliveredDate: 'Tue, Jan 02, 2025, 11:00',
        totalAmount: '1200.00',
        items: [
            { name: 'Dolo 650', discountPrice: '30', mrp: '35.00', qty: '5 Packs', total: '150.00', image: doloImg },
            { name: 'Vitamin C Supplements', discountPrice: '500', mrp: '600.00', qty: '2 Bottles', total: '1000.00', image: vitaminCImg }
        ],
        pricing: {
            subTotal: '1150.00',
            discount: '-0.00',
            serviceCharges: '+50.00',
            total: '1200.00'
        },
        refunds: [
            { productName: 'Dolo 650', reason: 'Out of Stock', orderedQty: '10 Packs', refundedQty: '5 Packs', refundAmount: '150.00', approvedDate: '03 Jan, 2025', image: doloImg }
        ],
        edit: [
            { productName: 'Dolo 650', reason: 'Out of Stock', orderedQty: '10 Packs', refundedQty: '5 Packs', refundAmount: '150.00', approvedDate: '03 Jan, 2025', image: doloImg }
        ]
    },
    {
        id: 'CPONMHY2412281048760',
        date: 'Wed, Jan 05, 2025 02:15 PM',
        status: 'Delivered',
        deliveredDate: 'Thu, Jan 06, 2025, 14:30',
        totalAmount: '850.50',
        items: [
            { name: 'N95 Masks', discountPrice: '200', mrp: '250.00', qty: '4 Packs', total: '800.00', image: n95Img },
            { name: 'Sanitizer 500ml', discountPrice: '50.50', mrp: '60.00', qty: '1 Bottle', total: '50.50', image: sanitizerImg }
        ],
        pricing: {
            subTotal: '850.50',
            discount: '0.00',
            serviceCharges: '0.00',
            total: '850.50'
        },
        refunds: []
    }
    // {
    //     id: 'CPONMHY2412281048761',
    //     date: 'Fri, Jan 10, 2025 10:00 AM',
    //     status: 'Delivered',
    //     deliveredDate: 'Sat, Jan 11, 2025, 12:00',
    //     totalAmount: '300.00',
    //     items: [
    //         { name: 'Bandages', discountPrice: '100', mrp: '120.00', qty: '1 Packs', total: '100.00', image: bandageImg }
    //     ],
    //     pricing: {
    //         subTotal: '300.00',
    //         discount: '0.00',
    //         serviceCharges: '0.00',
    //         total: '300.00'
    //     },
    //     refunds: [
    //         { productName: 'Bandages', reason: 'Damaged during transit', orderedQty: '3 Packs', refundedQty: '2 Packs', refundAmount: '200.00', approvedDate: '12 Jan, 2025', image: bandageImg }
    //     ]
    // },
    // {
    //     id: 'CPONMHY2412281048762',
    //     date: 'Sun, Jan 15, 2025 06:45 PM',
    //     status: 'Delivered',
    //     deliveredDate: 'Mon, Jan 16, 2025, 09:00',
    //     totalAmount: '2500.00',
    //     items: [
    //         { name: 'Glucometer', discountPrice: '1500', mrp: '2000.00', qty: '1 Unit', total: '1500.00', image: glucometerImg },
    //         { name: 'Test Strips', discountPrice: '1000', mrp: '1200.00', qty: '1 Pack', total: '1000.00', image: testStripsImg }
    //     ],
    //     pricing: {
    //         subTotal: '2500.00',
    //         discount: '0.00',
    //         serviceCharges: '0.00',
    //         total: '2500.00'
    //     },
    //     refunds: [
    //         { productName: 'Test Strips', reason: 'Short Expiry', orderedQty: '2 Packs', refundedQty: '1 Pack', refundAmount: '500.00', approvedDate: '17 Jan, 2025', image: testStripsImg }
    //     ]
    // }
];
