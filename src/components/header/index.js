import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, faChevronLeft, faKey, faRightToBracket, faUserGear } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButtonContainer, CustomMenu, CustomMenuItem, HeaderContainer, LogoIcon, LogoIconContainer, UserContainer } from './styles';


const Header = () => {
    const navigation = useNavigation();

    const [displayBackButton, setDisplayBackButton] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const goBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        setDisplayBackButton(navigation.isFocused()); // You may need to adjust this logic based on your app's navigation structure.
    }, [navigation]);
    return (
        <>
            <HeaderContainer>
                {(displayBackButton) && (
                    <BackButtonContainer onClick={goBack}>
                        <FontAwesomeIcon color="white" size="1x" icon={faChevronLeft} />
                    </BackButtonContainer>
                )}

                <LogoIconContainer>
                    <LogoIcon />
                </LogoIconContainer>

                <UserContainer onClick={handleClick}>
                    <FontAwesomeIcon color="white" size="2x" icon={faUserGear} />
                    <FontAwesomeIcon color="white" size="1x" icon={faCaretDown} />
                </UserContainer>
            </HeaderContainer>

            <CustomMenu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}>
                <CustomMenuItem onClick={handleClose}>
                    <FontAwesomeIcon size="1x" icon={faKey} />
                    <span>Trocar a senha</span>
                </CustomMenuItem>

                <CustomMenuItem onClick={handleClose}>
                    <FontAwesomeIcon size="1x" icon={faRightToBracket} />
                    <span>Sair</span>
                </CustomMenuItem>
            </CustomMenu>
        </>
    )
}

export default Header;