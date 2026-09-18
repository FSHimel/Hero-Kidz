export const orderInvoiceTemplate = ({
  orderId,
  items,
  totalPrice,
  shipping,
}) => {
  return `
    <div
      style="
        margin: 0;
        padding: 40px 20px;
        background-color: #f1f5f9;
        font-family: Arial, Helvetica, sans-serif;
        color: #1e293b;
      "
    >
      <div
        style="
          max-width: 650px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.08);
          border: 1px solid #e2e8f0;
        "
      >

        <!-- HEADER -->
        <div
          style="
            background-color: #0f172a;
            padding: 28px 30px;
            color: #ffffff;
          "
        >
          <h1
            style="
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            "
          >
            🧾 Order Invoice
          </h1>

          <p
            style="
              margin: 8px 0 0;
              font-size: 14px;
              color: #cbd5e1;
            "
          >
            Thank you for shopping with Hero Kidzz
          </p>
        </div>

        <!-- ORDER INFO -->
        <div
          style="
            padding: 25px 30px 10px;
          "
        >
          <p
            style="
              margin: 0;
              font-size: 14px;
              color: #64748b;
            "
          >
            Order ID
          </p>

          <p
            style="
              margin: 5px 0 0;
              font-size: 16px;
              font-weight: 700;
              color: #0f172a;
            "
          >
            ${orderId}
          </p>
        </div>

        <!-- ITEMS -->
        <div style="padding: 15px 30px 25px;">

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              border-collapse: collapse;
              font-size: 14px;
            "
          >
            <thead>
              <tr
                style="
                  background-color: #f8fafc;
                  color: #475569;
                "
              >
                <th
                  align="left"
                  style="
                    padding: 12px;
                    border-bottom: 1px solid #e2e8f0;
                  "
                >
                  Product
                </th>

                <th
                  align="center"
                  style="
                    padding: 12px;
                    border-bottom: 1px solid #e2e8f0;
                  "
                >
                  Qty
                </th>

                <th
                  align="right"
                  style="
                    padding: 12px;
                    border-bottom: 1px solid #e2e8f0;
                  "
                >
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              ${items
                .map(
                  (item) => `
                    <tr>
                      <td
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #1e293b;
                          font-weight: 500;
                        "
                      >
                        ${item.title}
                      </td>

                      <td
                        align="center"
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #64748b;
                        "
                      >
                        ${item.quantity}
                      </td>

                      <td
                        align="right"
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #1e293b;
                          font-weight: 600;
                        "
                      >
                        ৳${item.price * item.quantity}
                      </td>
                    </tr>
                  `,
                )
                .join("")}
                <tr>
                  <td
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #1e293b;
                          font-weight: 500;
                        "
                      >
                        Delivery Charge
                      </td>

                      <td
                        align="center"
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #64748b;
                        "
                      >
                        
                      </td>

                      <td
                        align="right"
                        style="
                          padding: 14px 12px;
                          border-bottom: 1px solid #e2e8f0;
                          color: #1e293b;
                          font-weight: 600;
                        "
                      >
                        ৳${shipping}
                      </td>
                </tr>
            </tbody>
          </table>

        </div>

        <!-- TOTAL -->
        <div
          style="
            margin: 0 30px;
            padding: 20px 0;
            border-top: 2px solid #0f172a;
          "
        >
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td
                style="
                  font-size: 16px;
                  font-weight: 600;
                  color: #475569;
                "
              >
                Total
              </td>

              <td
                align="right"
                style="
                  font-size: 24px;
                  font-weight: 700;
                  color: #0f172a;
                "
              >
                ৳${totalPrice}
              </td>
            </tr>
          </table>
        </div>

        <!-- FOOTER -->
        <div
          style="
            background-color: #f8fafc;
            padding: 22px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          "
        >
          <p
            style="
              margin: 0;
              font-size: 14px;
              color: #64748b;
            "
          >
            Thank you for shopping with
            <strong style="color: #0f172a;">
              Hero Kidzz
            </strong>
            ❤️
          </p>

          <p
            style="
              margin: 7px 0 0;
              font-size: 12px;
              color: #94a3b8;
            "
          >
            This is an automated order confirmation email.
          </p>
        </div>

      </div>
    </div>
  `;
};
