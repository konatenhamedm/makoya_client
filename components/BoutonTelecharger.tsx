"use client";
import React from "react";

function BoutonTelecharger() {
  return (
    <div
      className="ptss__toggle-btn js-ptss-toggle-btn rote bg-[#0076d7] rounded-r-lg rounded-l-lg cursor-pointer transition"
      onClick={() => alert("ddd")}
    >
      <table width="100%" border={0}>
        <tbody>
          <tr>
            <td valign="middle">
              <img
                src="assets/download.png"
                alt="mail"
                width="25"
                height="25"
              />
              {/* <svg
                className="check-svg hidden"
                width="5"
                height="5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                  fill="white"
                />
              </svg> */}
            </td>

            <td valign="middle">&nbsp;</td>
            <td valign="middle">
              <span>Télécharger application</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BoutonTelecharger;
