import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../../pages/Admin/Slider/AddSlider.module.css";
// import { GetHostel } from "../../../redux/actions/hostelActions";
// import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import axios from "axios";
import { backendApiUrl } from "../../../config/config";

const formData = new FormData();
function AddSlider({ setOpen }) {
  const [img1, setimg1] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [loading, setloading] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      formData.set("sliderimg", img1);

      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.post(`${backendApiUrl}uploadslider`, formData);

      if (res?.data.status) {
        setOpen(false);
        setloading(false);

        toast.success(res?.data?.msg, {
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.success("Something Went Wrong!!", {
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <div className={styles.divmainlogin}>
        <div className={styles.closeicondiv} onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <h1>Add Slider</h1>
        <form onSubmit={handlesubmit}>
          <div className={styles.inputdiv20}>
            {previewprofile1 ? (
              <>
                <div className={styles.main_img_divvvv}>
                  <img
                    alt="img"
                    className={styles.dharamshala_imgggg}
                    src={previewprofile1}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.main_img_divvvv}>
                  <img alt="img" src="/images/camera.png" />
                </div>
              </>
            )}

            <div className={styles.formdivvv_imf}>
              <input
                type="file"
                onChange={(e) => {
                  setimg1(e.target.files[0]);
                  console.log(e.target.files[0]);
                  setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          </div>
          <div className={styles.logbtnstylediv}>
            <button
              disabled={loading ? true : false}
              className={styles.logbtnstyle}
            >
              {loading ? (
                <CircularProgress size={25} style={{ color: "red" }} />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSlider;
