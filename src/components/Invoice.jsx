"use client"
import { Calendar } from "lucide-react"

const Invoice = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg  p-4">
          <h1 className="text-lg font-semibold mb-4 text-red-600">Generate Invoice for RFP : <h1 className="text-black">23092400</h1></h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Invoice No#</label>
              <input
                type="text"
                defaultValue="Yogendra Panchal"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Date</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="13/11/2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none "
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Hrs</label>
              <input
                type="text"
                defaultValue="15"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate</label>
              <input
                type="text"
                defaultValue="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Signature</label>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Browse</button>
            </div>

            <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg border border-red-300 hover:bg-red-200">
              Download & Submit Invoice
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm  p-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold">TAX Invoice</h2>
                <p className="text-gray-600 text-sm">#abc123</p>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-sm">Yogendra Panchal</h3>
                <p className="text-xs text-gray-600">Ahmedabad, Gujarat, India</p>
                <p className="text-xs text-gray-600">Email : panchodyogendra2184@gmail.com</p>
                <p className="text-xs text-gray-600">Phone : 8460251074</p>
                <p className="text-xs text-gray-600">PAN : AAIC03461</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm">Bill to</h4>
              <div className="text-xs text-gray-600">
                <p>Net Zero Initiative Pvt. Ltd. - RenewCred</p>
                <p>62-63, Wework Pavilion,</p>
                <p>Marathahalli - ORR, 1st Floor, Bangalore North,</p>
                <p>Bangalore, Karnataka - 560037</p>
                <p>PAN: AAJCN6018S</p>
                <p>GSTIN : NA</p>
                <p>State : Karnataka</p>
              </div>

              <div className="flex justify-between mt-3 text-xs">
                <div>
                  <p>
                    <strong>Invoice date:</strong> 13/11/2024
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Place of Supply:</strong> Ahmedabad
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-red-600 text-white">
                    <tr>
                      <th className="px-1 py-1 text-left">#</th>
                      <th className="px-1 py-1 text-left">Product Description</th>
                      <th className="px-1 py-1 text-center">HSN/SAC</th>
                      <th className="px-1 py-1 text-center">Total Hrs</th>
                      <th className="px-1 py-1 text-center">Rate/Hr</th>
                      <th className="px-1 py-1 text-center">CGST</th>
                      <th className="px-1 py-1 text-center">SGST</th>
                      <th className="px-1 py-1 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-1 py-1">1</td>
                      <td className="px-1 py-1">Standards and Methodologies Development</td>
                      <td className="px-1 py-1 text-center">998112</td>
                      <td className="px-1 py-1 text-center">15</td>
                      <td className="px-1 py-1 text-center">1000.00</td>
                      <td className="px-1 py-1 text-center">
                        0.00
                        <br />
                        (0%)
                      </td>
                      <td className="px-1 py-1 text-center">
                        0.00
                        <br />
                        (0%)
                      </td>
                      <td className="px-1 py-1 text-right">15000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex-1 pr-4">
                <h4 className="font-semibold mb-2 text-sm">Bank details:</h4>
                <div className="text-xs text-gray-600">
                  <p>Account Name : Yogendra Arvindbhai Panchal</p>
                  <p>Bank Name : Kotak Mahindra Limited</p>
                  <p>A/C No. : 1234567890012</p>
                  <p>Branch & IFSC Code : Vatva & KTK0001723</p>
                </div>
              </div>

              <div className="text-right min-w-36">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>15000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST</span>
                    <span>0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST</span>
                    <span>0.00</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-1">
                    <span>Total</span>
                    <span>15000.00</span>
                  </div>
                  <p className="text-xs">Total in words: Fifteen Thousand Only</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-3">
              <p className="font-semibold mb-2 text-sm">Authorised Signature :</p>
              <p className="text-xs text-gray-500 mt-4">System Generated Invoice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice