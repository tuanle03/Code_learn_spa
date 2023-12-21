// Trong file ForumPage.tsx
import { useEffect } from "react";
import ForumQues from "../../components/ForumQues/ForumQues.tsx";
import ForumAns from "../../components/ForumAns/ForumAns.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const ForumPage: React.FC = () => {
  // Sử dụng một biến cố định là 2 thay vì giá trị id từ URL
  const discussionId = "2";
  console.log("Discussion ID:", discussionId);

  useEffect(() => {
    // Không cần kiểm tra id vì đang sử dụng biến cố định là 2
    fetchData(discussionId);
  }, [discussionId]);

  const fetchData = async (discussionId: string) => {
    try {
      const response = await fetch(
        `https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/discussions/${discussionId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Discussion data:", data);
      } else {
        console.error("Đã có lỗi khi gọi API:", response.statusText);
      }
    } catch (error: any) {
      console.error("Đã có lỗi khi gọi API:", error.message);
    }
  };

  return (
    <>
      <Header signIn={false} avatar="" username="" />
      <ForumQues />
      <ForumAns
        ForumAns="Sample answer text"
        initialLike={0}
        author="John Doe"
        publicationDate="2023-01-01"
        title="Sample Title"
        avatar="url/to/avatar"
      />
      <Footer />
    </>
  );
};

export default ForumPage;
