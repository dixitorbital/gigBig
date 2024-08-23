import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom"; //Link,
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import { useNavigate } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });
  const navigate = useNavigate();
  console.log(data);
  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
  const handleBack = () => {
    navigate(`/messages`);
  };
  return (
    <div className="message">
      <div className="container">
        {/* <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> John Doe
        </span> */}
        <button
          onClick={() => handleBack()}
          className="text-white h-25 bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
        >
          Back
        </button>

        {isLoading ? (
          "loading"
        ) : error ? (
          "something went wrong😭😭"
        ) : (
          <>
            <div className="messages">
              {data.map((m) => (
                <div
                  className={
                    m.userId === currentUser._id
                      ? "owner item"
                      : "notowner item"
                  }
                  key={m._id}
                >
                  <img src="/img/noavatar.jpeg" alt="" />
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button className="mx-5" type="submit">
            {<VscSend size={35} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
