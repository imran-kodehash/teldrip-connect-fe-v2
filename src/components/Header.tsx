
import { useAuthStore } from "@/store/useAuthStore";
import { WalletIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";


const Header = () => {

    const { firstName, lastName } = useAuthStore();


    return (
        <nav className="h-[10vh] flex justify-center items-center w-full px-5 py-[38px] border-b border-primary-200">
            <h4 className="text-base font-semibold text-secondary md:text-xl truncate w-[165px] md:w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {`Hello, ${firstName?.trim() || lastName?.trim()
                    ? `${firstName?.trim() || ""}${lastName?.trim() ? ` ${lastName.trim()}` : ""}`
                    : !firstName
                        ? ""
                        : "User"
                    }`}
            </h4>

            <div className="flex gap-3">
                {/* WALLET */}
                <div className="bg-secondary-300 rounded-lg border border-[#ccc] px-4 py-3 flex justify-center items-center gap-2">
                    <WalletIcon className="size-5" />
                    <p className="font-normal text-base text-[#13102B]">
                        <span className="text-base  text-primary-900 font-bold">{`0`}</span>
                    </p>
                </div>

                {/* NOTIFICATION */}
                <div className="h-auto relative cursor-pointer">
                    <div
                        className="relative w-12 h-12 border border-primary-900 rounded-lg flex justify-center items-center"
                    // onClick={toggleDropdown}
                    >
                        {/* <Image
                            src="/assets/icons/svg/bell.svg"
                            alt="Dialpad Icon"
                            width={20}
                            height={20}
                        /> */}
                        <span className="w-[10px] h-[10px] border-2 border-white bg-[#EB4848] rounded-full absolute top-[12px] right-[15px]"></span>
                    </div>

                    {/* <div>
                        {showNotification && (
                            <Notification onClose={() => setShowNotification(false)} />
                        )}
                    </div> */}
                </div>

                {/* DIALER */}
                {/* <div className="flex" >
                    {!dialer.isMinimizedOpen && (
                        <CustomButton
                            size="icon"
                            className={`border ${isExpired ? "border-secondary-60 cursor-not-allowed" : "border-secondary-70 bg-[linear-gradient(0deg,#F8F6FF_3.63%,#BCB1FF_95.91%)] hover:bg-transparent"
                                } rounded-lg w-12 h-12 flex justify-center items-center`}
                            onClick={() => {
                                !isExpired ? (setOpenExpandedDialer(),
                                    setDailerStep(0)) : null
                            }}
                            icon={
                                <Image
                                    src="/assets/icons/svg/dialpad-circle.svg"
                                    alt="Dialpad Icon"
                                    width={18}
                                    height={18}
                                    className={`object-contain ${isExpired ? "grayscale opacity-50" : "invert-1"}`}
                                />
                            }
                        />
                    )}

                    <MinimizedDialer />
                    <ExpandedDialer />
                </div> */}

                {/* USER PROFILE */}
                {/* <Link href="/settings">
                    {userInfo?.profileUrl ? (
                        <Avatar className="cursor-pointer">
                            <AvatarImage src={userInfo?.profileUrl || ""} />
                            <AvatarFallback></AvatarFallback>
                        </Avatar>
                    ) : (
                        <NameAvatar
                            className="bg-primary-100 border border-primary-900 hover:bg-transparent rounded-full text-primary-900"
                            firstName={userInfo?.firstName}
                            lastName={userInfo?.lastName}
                        />
                    )}
                </Link> */}
            </div>
        </nav>
    );
};

export default Header;
