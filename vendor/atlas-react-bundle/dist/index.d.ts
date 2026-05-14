import { SxProps, AlertProps, ButtonGroupProps, ButtonProps, CircularProgressProps, TypographyVariant, TypographyProps, ChipProps, ListItemProps, AvatarProps, Theme, DividerProps, PaperProps, TextFieldProps, GridProps, ListItemTextProps, BoxProps, DrawerProps, StepIconProps, TabScrollButtonProps, TooltipProps, SimplePaletteColorOptions, StackProps, MenuItemProps, PopperProps, ListSubheaderProps, LinkProps, CardProps as CardProps$1, BreadcrumbsProps, MenuProps, IconButtonProps } from '@mui/material';
import { GridRowParams } from '@mui/x-data-grid';
import { DatePickerProps, TimePickerProps } from '@mui/x-date-pickers';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { JSX, FC, PropsWithChildren, ComponentProps, ReactNode, MouseEventHandler, InputHTMLAttributes, MouseEvent as MouseEvent$1, KeyboardEvent as KeyboardEvent$1, ReactElement, Dispatch, SetStateAction, RefObject } from 'react';
import { BadgeProps } from '@mui/material/Badge';
import { ChipProps as ChipProps$1 } from '@mui/material/Chip';
import { TableCellProps } from '@mui/material/TableCell';
import { TablePaginationProps } from '@mui/material/TablePagination';
import { TableSortLabelProps } from '@mui/material/TableSortLabel';
import { DropResult, DragStart, ResponderProvided } from '@hello-pangea/dnd';

declare const accordion: {
    color: {
        value: string;
        type: string;
    };
    borderBottomColor: {
        value: string;
        type: string;
    };
    borderBottomWidth: {
        value: string;
        type: string;
    };
    borderBottomStyle: {
        value: string;
        type: string;
    };
    borderRadius: {
        value: string;
        type: string;
    };
    subtitle: {
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    summary: {
        minHeight: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    hover: {
        color: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    active: {
        color: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    focus: {
        boxShadow: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        outlineOffset: {
            value: string;
            type: string;
        };
    };
    icon: {
        color: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
    };
    details: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
    };
};
declare const aiChatBox: {
    gap: {
        value: string;
        type: string;
    };
    container: {
        borderRadius: {
            value: string;
            type: string;
        };
        padding: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        maxWidth: {
            value: string;
            type: string;
        };
        default: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        active: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        disabled: {
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
    glow: {
        height: {
            value: string;
            type: string;
        };
        insetInline: {
            value: string;
            type: string;
        };
    };
    borderGradient: {
        stop1: {
            value: string;
            type: string;
        };
        stop2: {
            value: string;
            type: string;
        };
        stop3: {
            value: string;
            type: string;
        };
    };
    textField: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
    };
    actions: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        leadingGap: {
            value: string;
            type: string;
        };
        trailingGap: {
            value: string;
            type: string;
        };
    };
    uploads: {
        minHeight: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        padding: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        dropZone: {
            borderColor: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            inset: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
        item: {
            height: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        button: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            icon: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
            };
        };
        tooltip: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    toolsMenu: {
        gap: {
            value: string;
            type: string;
        };
        hasSelected: {
            marginInlineStart: {
                value: string;
                type: string;
            };
        };
    };
    suggestions: {
        gap: {
            value: string;
            type: string;
        };
        chip: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
    suggestionsMenu: {
        borderRadius: {
            value: string;
            type: string;
        };
        item: {
            height: {
                value: string;
                type: string;
            };
            first: {
                borderTopLeftRadius: {
                    value: string;
                    type: string;
                };
                borderTopRightRadius: {
                    value: string;
                    type: string;
                };
            };
            last: {
                borderBottomLeftRadius: {
                    value: string;
                    type: string;
                };
                borderBottomRightRadius: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    disclaimer: {
        color: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
};
declare const aiChatContent: {
    gap: {
        value: string;
        type: string;
    };
    timestamp: {
        gap: {
            value: string;
            type: string;
        };
        divider: {
            color: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            style: {
                value: string;
                type: string;
            };
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    userMessage: {
        gap: {
            value: string;
            type: string;
        };
        bubble: {
            backgroundColor: {
                value: string;
                type: string;
            };
            paddingInline: {
                value: string;
                type: string;
            };
            paddingBlock: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            boxShadow: {
                value: {
                    layers: {
                        inset: boolean;
                        offsetX: string;
                        offsetY: string;
                        blur: string;
                        spread: string;
                        color: string;
                    }[];
                    stringValue: string;
                };
                type: string;
            };
            leftAligned: {
                borderStartStartRadius: {
                    value: string;
                    type: string;
                };
                borderStartEndRadius: {
                    value: string;
                    type: string;
                };
                borderEndStartRadius: {
                    value: string;
                    type: string;
                };
                borderEndEndRadius: {
                    value: string;
                    type: string;
                };
            };
            rightAligned: {
                borderStartStartRadius: {
                    value: string;
                    type: string;
                };
                borderStartEndRadius: {
                    value: string;
                    type: string;
                };
                borderEndStartRadius: {
                    value: string;
                    type: string;
                };
                borderEndEndRadius: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    systemMessage: {
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        link: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
        name: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    aiMessage: {
        gap: {
            value: string;
            type: string;
        };
    };
    message: {
        header: {
            gap: {
                value: string;
                type: string;
            };
            content: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            name: {
                fontWeight: {
                    value: number;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
            time: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
        footer: {
            gap: {
                value: string;
                type: string;
            };
            callToAction: {
                fontWeight: {
                    value: number;
                    type: string;
                };
            };
            actions: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            leadingActions: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            trailingActions: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            suggestedActions: {
                gap: {
                    value: string;
                    type: string;
                };
                label: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                };
                actions: {
                    gap: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
    };
    sourceList: {
        gap: {
            value: string;
            type: string;
        };
        marginBlock: {
            value: string;
            type: string;
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            marginBlockStart: {
                value: string;
                type: string;
            };
        };
        chips: {
            columnGap: {
                value: string;
                type: string;
            };
            rowGap: {
                value: string;
                type: string;
            };
        };
    };
};
declare const aiChatUi: {
    page: {
        borderStartStartRadius: {
            value: string;
            type: string;
        };
        background: {
            value: string;
            type: string;
        };
        smallScreen: {
            paddingInline: {
                value: string;
                type: string;
            };
        };
        largeScreen: {
            paddingInline: {
                value: string;
                type: string;
            };
        };
        header: {
            gap: {
                value: string;
                type: string;
            };
            marginBlockEnd: {
                value: string;
                type: string;
            };
            title: {
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
            subtitle: {
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        content: {
            maxWidth: {
                value: string;
                type: string;
            };
            paddingBlockStart: {
                value: string;
                type: string;
            };
            animationMargin: {
                value: string;
                type: string;
            };
            blurMargin: {
                value: string;
                type: string;
            };
            blur: {
                value: string;
                type: string;
            };
        };
        startedChat: {
            chatBox: {
                paddingBlock: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    panel: {
        container: {
            backgroundColor: {
                value: string;
                type: string;
            };
            border: {
                color: {
                    value: string;
                    type: string;
                };
                width: {
                    value: string;
                    type: string;
                };
            };
            shadow: {
                stop1: {
                    value: string;
                    type: string;
                };
                stop2: {
                    value: string;
                    type: string;
                };
                stop3: {
                    value: string;
                    type: string;
                };
                stop4: {
                    value: string;
                    type: string;
                };
                stop5: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
                blurRadius: {
                    value: string;
                    type: string;
                };
            };
        };
        content: {
            paddingInline: {
                value: string;
                type: string;
            };
            paddingBlock: {
                value: string;
                type: string;
            };
        };
        chatBox: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        docked: {
            borderInlineStartColor: {
                value: string;
                type: string;
            };
            borderInlineStartWidth: {
                value: string;
                type: string;
            };
            borderInlineStartStyle: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            tablet: {
                boxShadow: {
                    value: {
                        layers: {
                            inset: boolean;
                            offsetX: string;
                            offsetY: string;
                            blur: string;
                            spread: string;
                            color: string;
                        }[];
                        stringValue: string;
                    };
                    type: string;
                };
            };
        };
        floating: {
            borderWidth: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            boxShadow: {
                value: {
                    layers: {
                        inset: boolean;
                        offsetX: string;
                        offsetY: string;
                        blur: string;
                        spread: string;
                        color: string;
                    }[];
                    stringValue: string;
                };
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            minWidth: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            minHeight: {
                value: string;
                type: string;
            };
            chatBox: {
                borderEndStartRadius: {
                    value: string;
                    type: string;
                };
                borderEndEndRadius: {
                    value: string;
                    type: string;
                };
            };
            dockingHint: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderInlineStartColor: {
                    value: string;
                    type: string;
                };
                borderInlineStartWidth: {
                    value: string;
                    type: string;
                };
                borderInlineStartStyle: {
                    value: string;
                    type: string;
                };
            };
            resizeHandle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                padding: {
                    value: string;
                    type: string;
                };
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                icon: {
                    width: {
                        value: string;
                        type: string;
                    };
                    height: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        minimized: {
            borderRadius: {
                value: string;
                type: string;
            };
            insetInlineEnd: {
                value: string;
                type: string;
            };
            insetBlockEnd: {
                value: string;
                type: string;
            };
        };
        header: {
            maximized: {
                paddingInline: {
                    value: string;
                    type: string;
                };
                paddingBlockEnd: {
                    value: string;
                    type: string;
                };
                smallScreen: {
                    paddingBlockStart: {
                        value: string;
                        type: string;
                    };
                };
                gap: {
                    value: string;
                    type: string;
                };
                title: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                };
            };
            minimized: {
                padding: {
                    value: string;
                    type: string;
                };
                gap: {
                    value: string;
                    type: string;
                };
                content: {
                    gap: {
                        value: string;
                        type: string;
                    };
                };
                assistant: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                };
                title: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
    };
};
declare const aiContextPanel: {
    container: {
        borderRadius: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
        };
        padding: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        boxShadow: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
    };
    wide: {
        maxWidth: {
            value: string;
            type: string;
        };
    };
    narrow: {
        maxWidth: {
            value: string;
            type: string;
        };
    };
    tab: {
        gap: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingInlineStart: {
            value: string;
            type: string;
        };
        paddingInlineEnd: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        labelContent: {
            gap: {
                value: string;
                type: string;
            };
        };
        active: {
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        inactive: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
        };
        badge: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
        };
    };
    title: {
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    content: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
    };
    footer: {
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    resizeHandle: {
        width: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        hover: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        focus: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        active: {
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
    openButton: {
        borderRadius: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        boxShadow: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        position: {
            right: {
                value: string;
                type: string;
            };
        };
    };
};
declare const aiDisclaimer: {
    gap: {
        value: string;
        type: string;
    };
    color: {
        value: string;
        type: string;
    };
    fontFamily: {
        value: string;
        type: string;
    };
    fontSize: {
        value: string;
        type: string;
    };
    fontWeight: {
        value: number;
        type: string;
    };
    letterSpacing: {
        value: string;
        type: string;
    };
    lineHeight: {
        value: string;
        type: string;
    };
    beta: {
        color: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    learnMore: {
        color: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        textDecoration: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
};
declare const aiGlow: {
    background: {
        value: string;
        type: string;
    };
    opacity: {
        value: number;
        type: string;
    };
    blurRadius: {
        value: string;
        type: string;
    };
};
declare const aiLoadingIndicator: {
    sparkle: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        background: {
            value: string;
            type: string;
        };
        clipPath: {
            value: string;
            type: string;
        };
    };
    sm: {
        value: number;
        type: string;
    };
    md: {
        value: number;
        type: string;
    };
    lg: {
        value: number;
        type: string;
    };
    xl: {
        value: number;
        type: string;
    };
    "2xl": {
        value: number;
        type: string;
    };
    s1: {
        "1": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "2": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "3": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "4": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "5": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "6": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
    };
    s2: {
        "1": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "2": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "3": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "4": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "5": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "6": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
    };
    s3: {
        "1": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "2": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "3": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "4": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "5": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
        "6": {
            s: {
                value: number;
                type: string;
            };
            x: {
                value: string;
                type: string;
            };
            y: {
                value: string;
                type: string;
            };
            o: {
                value: number;
                type: string;
            };
        };
    };
};
declare const aiThinkingIndicator: {
    paddingTop: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    paddingInlineStart: {
        value: string;
        type: string;
    };
    paddingInlineEnd: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    description: {
        fontWeight: {
            value: number;
            type: string;
        };
    };
    dot: {
        color: {
            value: string;
            type: string;
        };
    };
    surface: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        variant: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        transparent: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
};
declare const alert: {
    borderRadius: {
        value: string;
        type: string;
    };
    paddingTop: {
        value: string;
        type: string;
    };
    paddingRight: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    paddingLeft: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    minHeight: {
        value: string;
        type: string;
    };
    icon: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
    };
    message: {
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        title: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    action: {
        color: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    success: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    info: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    warning: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    error: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    processing: {
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    ai: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    divided: {
        gridRowGap: {
            value: string;
            type: string;
        };
        action: {
            borderTopColor: {
                value: string;
                type: string;
            };
            borderTopWidth: {
                value: string;
                type: string;
            };
            borderTopStyle: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        message: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
        };
    };
    fixed: {
        borderRadius: {
            value: string;
            type: string;
        };
    };
};
declare const avatarGroup: {
    avatar: {
        marginLeft: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
    };
    additionalAvatar: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
};
declare const avatar: {
    small: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
    medium: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
    large: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
    xlarge: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
    red: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    yellow: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    green: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    blue: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    purple: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
};
declare const backdrop: {
    background: {
        value: string;
        type: string;
    };
};
declare const badge: {
    background: {
        value: string;
        type: string;
    };
    color: {
        value: string;
        type: string;
    };
    outlineWidth: {
        value: string;
        type: string;
    };
    outlineStyle: {
        value: string;
        type: string;
    };
    outlineColor: {
        value: string;
        type: string;
    };
    small: {
        height: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        minWidth: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
    };
    medium: {
        height: {
            value: string;
            type: string;
        };
        minWidth: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    large: {
        height: {
            value: string;
            type: string;
        };
        minWidth: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
};
declare const breadcrumbs: {
    icon: {
        color: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        last: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    label: {
        height: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        first: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        last: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    button: {
        borderRadius: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        default: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
};
declare const buttonArray: {
    gap: {
        value: string;
        type: string;
    };
};
declare const buttonTile: {
    borderWidth: {
        value: string;
        type: string;
    };
    borderStyle: {
        value: string;
        type: string;
    };
    borderColor: {
        value: string;
        type: string;
    };
    default: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    hover: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    active: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    focus: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    disabled: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
    icon: {
        color: {
            value: string;
            type: string;
        };
        disabled: {
            color: {
                value: string;
                type: string;
            };
        };
        muted: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    sizes: {
        small: {
            height: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
        list: {
            height: {
                value: string;
                type: string;
            };
            minWidth: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
        large: {
            width: {
                value: string;
                type: string;
            };
            minWidth: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
};
declare const button: {
    primary: {
        default: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    secondary: {
        default: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    tertiary: {
        default: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    destructive: {
        primary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        secondary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        tertiary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    inverse: {
        secondary: {
            default: {
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        tertiary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    ai: {
        secondary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        tertiary: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    small: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        label: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    medium: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        label: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    large: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        label: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    iconOnly: {
        small: {
            width: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        medium: {
            width: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        large: {
            width: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
};
declare const splitButton: {
    gap: {
        value: string;
        type: string;
    };
};
declare const calendar: {
    container: {
        padding: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    stepper: {
        gap: {
            value: string;
            type: string;
        };
    };
    yearsView: {
        gap: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        year: {
            medium: {
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    monthsView: {
        gap: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        month: {
            medium: {
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    monthView: {
        gap: {
            value: string;
            type: string;
        };
        weekHeader: {
            gap: {
                value: string;
                type: string;
            };
            day: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        week: {
            gap: {
                value: string;
                type: string;
            };
        };
        day: {
            medium: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
            unselected: {
                default: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                active: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                disabled: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
            selected: {
                default: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                active: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                disabled: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                };
            };
            current: {
                default: {
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                hover: {
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                active: {
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                disabled: {
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
            range: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                first: {
                    borderTopLeftRadius: {
                        value: string;
                        type: string;
                    };
                    borderBottomLeftRadius: {
                        value: string;
                        type: string;
                    };
                };
                last: {
                    borderTopRightRadius: {
                        value: string;
                        type: string;
                    };
                    borderBottomRightRadius: {
                        value: string;
                        type: string;
                    };
                };
            };
            rangePreview: {
                borderStyle: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const card: {
    container: {
        gap: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    header: {
        status: {
            gap: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
            avatar: {
                color: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            icon: {
                color: {
                    value: string;
                    type: string;
                };
            };
            label: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        labels: {
            gap: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
            label: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            separator: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                dot: {
                    width: {
                        value: string;
                        type: string;
                    };
                    height: {
                        value: string;
                        type: string;
                    };
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    borderRadius: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        title: {
            color: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
        subtitle: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    media: {
        borderRadius: {
            value: string;
            type: string;
        };
    };
    horizontal: {
        footer: {
            paddingTop: {
                value: string;
                type: string;
            };
            borderTopWidth: {
                value: string;
                type: string;
            };
            borderTopStyle: {
                value: string;
                type: string;
            };
            borderTopColor: {
                value: string;
                type: string;
            };
        };
    };
    footer: {
        paddingBottom: {
            value: string;
            type: string;
        };
    };
    ai: {
        top: {
            offset: {
                value: string;
            };
        };
        start: {
            offset: {
                value: string;
            };
        };
    };
};
declare const checkbox: {
    width: {
        value: string;
        type: string;
    };
    height: {
        value: string;
        type: string;
    };
    borderRadius: {
        value: string;
        type: string;
    };
    borderWidth: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    indicator: {
        color: {
            value: string;
            type: string;
        };
        disabled: {
            color: {
                value: string;
                type: string;
            };
        };
        error: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    label: {
        color: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        disabled: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    unchecked: {
        default: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        hover: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        active: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        focus: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        disabled: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        error: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
    };
    checked: {
        default: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        hover: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        active: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        focus: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        disabled: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
        error: {
            borderColor: {
                value: string;
                type: string;
            };
            background: {
                value: string;
                type: string;
            };
        };
    };
};
declare const chip: {
    gap: {
        value: string;
        type: string;
    };
    small: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        withTrailingIcon: {
            paddingRight: {
                value: string;
                type: string;
            };
        };
        withLeadingIcon: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        icon: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    large: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        withLeadingIcon: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        withTrailingIcon: {
            paddingRight: {
                value: string;
                type: string;
            };
        };
        icon: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    default: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    hover: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    focus: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    active: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    disabled: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
    };
    error: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
        icon: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    selected: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        focus: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
    filled: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        focus: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        error: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            icon: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        selected: {
            default: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            focus: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
            active: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const datePicker: {
    header: {
        paddingBottom: {
            value: string;
            type: string;
        };
        borderBottomWidth: {
            value: string;
            type: string;
        };
        borderBottomColor: {
            value: string;
            type: string;
        };
        borderBottomStyle: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        title: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    calendar: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
    };
    footer: {
        paddingTop: {
            value: string;
            type: string;
        };
        borderTopWidth: {
            value: string;
            type: string;
        };
        borderTopColor: {
            value: string;
            type: string;
        };
        borderTopStyle: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    popover: {
        boxShadow: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
    };
};
declare const divider: {
    styles: {
        solid: {
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        dashed: {
            borderWidth: {
                value: string;
                type: string;
            };
            dash: {
                value: string;
                type: string;
            };
            space: {
                value: string;
                type: string;
            };
        };
    };
    colors: {
        default: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        secondary: {
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
};
declare const dragAndDrop: {
    item: {
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        marginBottom: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        minHeight: {
            value: string;
            type: string;
        };
        default: {
            boxShadow: {
                value: {
                    layers: {
                        inset: boolean;
                        offsetX: string;
                        offsetY: string;
                        blur: string;
                        spread: string;
                        color: string;
                    }[];
                    stringValue: string;
                };
                type: string;
            };
        };
        dragging: {
            borderColor: {
                value: string;
                type: string;
            };
            boxShadow: {
                value: {
                    layers: ({
                        inset: boolean;
                        offsetX: string;
                        offsetY: string;
                        blur: string;
                        spread: string;
                        color: string;
                    } | {
                        inset: boolean;
                        offsetX: number;
                        offsetY: string;
                        blur: string;
                        spread: string;
                        color: string;
                    })[];
                    stringValue: string;
                };
                type: string;
            };
        };
        hover: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        focus: {
            borderColor: {
                value: string;
                type: string;
            };
            outlineWidth: {
                value: string;
                type: string;
            };
            outlineOffset: {
                value: string;
                type: string;
            };
            outlineStyle: {
                value: string;
                type: string;
            };
            outlineColor: {
                value: string;
                type: string;
            };
        };
        inMove: {
            borderColor: {
                value: string;
                type: string;
            };
        };
        first: {
            padding: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
        };
        last: {
            paddingTop: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            minWidth: {
                value: string;
                type: string;
            };
        };
        handle: {
            color: {
                value: string;
                type: string;
            };
        };
    };
    placeholder: {
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        marginBottom: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        minHeight: {
            value: string;
            type: string;
        };
    };
};
declare const dropdown: {
    container: {
        boxShadow: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        marginTop: {
            value: string;
            type: string;
        };
        marginBottom: {
            value: string;
            type: string;
        };
    };
    list: {
        item: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            checkbox: {
                marginRight: {
                    value: string;
                    type: string;
                };
                checked: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        sectioned: {
            gap: {
                value: string;
                type: string;
            };
            header: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    box: {
        heightOffset: {
            value: string;
            type: string;
        };
    };
};
declare const filterToolbar: {
    mobile: {
        container: {
            gap: {
                value: string;
                type: string;
            };
        };
        fields: {
            gap: {
                value: string;
                type: string;
            };
        };
        buttons: {
            gap: {
                value: string;
                type: string;
            };
        };
    };
    tablet: {
        container: {
            gap: {
                value: string;
                type: string;
            };
        };
        fields: {
            gap: {
                value: string;
                type: string;
            };
        };
        buttons: {
            gap: {
                value: string;
                type: string;
            };
        };
        selectedItems: {
            height: {
                value: string;
                type: string;
            };
        };
    };
    selectedItems: {
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
};
declare const footer: {
    gap: {
        value: string;
        type: string;
    };
    container: {
        maxWidth: {
            value: string;
            type: string;
        };
    };
    divider: {
        borderTopWidth: {
            value: string;
            type: string;
        };
        borderTopStyle: {
            value: string;
            type: string;
        };
        borderTopColor: {
            value: string;
            type: string;
        };
    };
    desktop: {
        paddingTop: {
            value: string;
            type: string;
        };
        horizontalPadding: {
            none: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
            small: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
            medium: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
            large: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    mobile: {
        paddingTop: {
            value: string;
            type: string;
        };
    };
    colors: {
        base: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        container: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        transparent: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
};
declare const formField: {
    gap: {
        value: string;
        type: string;
    };
    label: {
        color: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
    };
    help: {
        color: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
    };
    status: {
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        error: {
            color: {
                value: string;
                type: string;
            };
        };
        success: {
            color: {
                value: string;
                type: string;
            };
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
};
declare const globalNav: {
    container: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        backdrop: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
    header: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderBottomColor: {
            value: string;
            type: string;
        };
    };
    list: {
        gap: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        item: {
            padding: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            default: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            highlighted: {
                default: {
                    borderColor: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
                focus: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
            };
            secondary: {
                gap: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            current: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderLeftWidth: {
                    value: string;
                    type: string;
                };
                borderLeftColor: {
                    value: string;
                    type: string;
                };
            };
            group: {
                open: {
                    borderRadius: {
                        value: string;
                        type: string;
                    };
                    borderWidth: {
                        value: string;
                        type: string;
                    };
                    borderStyle: {
                        value: string;
                        type: string;
                    };
                    borderColor: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        treeItem: {
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            default: {
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            current: {
                borderLeftWidth: {
                    value: string;
                    type: string;
                };
                borderLeftColor: {
                    value: string;
                    type: string;
                };
                borderLeftStyle: {
                    value: string;
                    type: string;
                };
            };
            icon: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
            };
        };
        divider: {
            borderWidth: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            marginTop: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
        };
        sectionTitle: {
            paddingTop: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    menuButton: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        focus: {
            outlineColor: {
                value: string;
                type: string;
            };
        };
    };
    expanded: {
        width: {
            value: string;
            type: string;
        };
        list: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    collapsed: {
        width: {
            value: string;
            type: string;
        };
        header: {
            height: {
                value: string;
                type: string;
            };
        };
        list: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    aiSideNav: {
        list: {
            paddingBottom: {
                value: string;
                type: string;
            };
            item: {
                padding: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                viewAll: {
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                };
                secondary: {
                    paddingLeft: {
                        value: string;
                        type: string;
                    };
                };
            };
            items: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            expanded: {
                list: {
                    paddingLeft: {
                        value: string;
                        type: string;
                    };
                    paddingRight: {
                        value: string;
                        type: string;
                    };
                };
            };
            collapsed: {
                list: {
                    item: {
                        padding: {
                            value: string;
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
declare const globalHeader: {
    gap: {
        value: string;
        type: string;
    };
    height: {
        value: string;
        type: string;
    };
    paddingLeft: {
        value: string;
        type: string;
    };
    paddingRight: {
        value: string;
        type: string;
    };
    borderBottomColor: {
        value: string;
        type: string;
    };
    borderBottomWidth: {
        value: string;
        type: string;
    };
    borderBottomStyle: {
        value: string;
        type: string;
    };
    leadingSlot: {
        padding: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    trailingSlot: {
        gap: {
            value: string;
            type: string;
        };
    };
    public: {
        leadingSlot: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
    };
};
declare const input: {
    outlined: {
        default: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
        disabled: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
        error: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
        readOnly: {
            container: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                opacity: {
                    value: number;
                    type: string;
                };
            };
            adornment: {
                color: {
                    value: string;
                    type: string;
                };
            };
            action: {
                color: {
                    value: string;
                    type: string;
                };
            };
            placeholder: {
                color: {
                    value: string;
                    type: string;
                };
            };
            border: {
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    ai: {
        default: {
            border: {
                borderRadius: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                gradient: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            border: {
                gradient: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            border: {
                gradient: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    medium: {
        container: {
            height: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
        };
        border: {
            borderRadius: {
                value: string;
                type: string;
            };
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        input: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    autocomplete: {
        container: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
    };
};
declare const link: {
    color: {
        value: string;
        type: string;
    };
    fontWeight: {
        value: number;
        type: string;
    };
    textDecoration: {
        value: string;
        type: string;
    };
    hover: {
        textDecoration: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
    };
};
declare const list: {
    item: {
        borderBottomWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        borderColor: {
            value: string;
            type: string;
        };
        checkbox: {
            marginRight: {
                value: string;
                type: string;
            };
        };
        content: {
            gap: {
                value: string;
                type: string;
            };
            label: {
                default: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                title: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                secondary: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                context: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
            icon: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
            };
            media: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
            };
        };
        spacing: {
            none: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            default: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            tight: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            comfortable: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            selectable: {
                default: {
                    paddingTop: {
                        value: string;
                        type: string;
                    };
                    paddingBottom: {
                        value: string;
                        type: string;
                    };
                    paddingLeft: {
                        value: string;
                        type: string;
                    };
                    paddingRight: {
                        value: string;
                        type: string;
                    };
                };
                tight: {
                    paddingTop: {
                        value: string;
                        type: string;
                    };
                    paddingBottom: {
                        value: string;
                        type: string;
                    };
                    paddingLeft: {
                        value: string;
                        type: string;
                    };
                    paddingRight: {
                        value: string;
                        type: string;
                    };
                };
                comfortable: {
                    paddingTop: {
                        value: string;
                        type: string;
                    };
                    paddingBottom: {
                        value: string;
                        type: string;
                    };
                    paddingLeft: {
                        value: string;
                        type: string;
                    };
                    paddingRight: {
                        value: string;
                        type: string;
                    };
                };
            };
            withSecondaryAction: {
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
        };
        plain: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        clickable: {
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        multiline: {
            gap: {
                value: string;
                type: string;
            };
            withMedia: {
                gap: {
                    value: string;
                    type: string;
                };
            };
        };
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        selected: {
            default: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            active: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            noCheck: {
                borderLeftWidth: {
                    value: string;
                    type: string;
                };
                borderLeftStyle: {
                    value: string;
                    type: string;
                };
                borderLeftColor: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    sectioned: {
        gap: {
            value: string;
            type: string;
        };
        header: {
            marginTop: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
            borderBottomStyle: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            label: {
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    groupLabel: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
    };
};
declare const loadingIndicator: {
    circular: {
        track: {
            color: {
                value: string;
                type: string;
            };
        };
        indicator: {
            color: {
                value: string;
                type: string;
            };
        };
        sm: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            track: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
            indicator: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
        };
        md: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            track: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
            indicator: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
        };
        lg: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            track: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
            indicator: {
                strokeWidth: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    linear: {
        track: {
            height: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        indicator: {
            color: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
        };
    };
};
declare const menu: {
    borderRadius: {
        value: string;
        type: string;
    };
    backgroundColor: {
        value: string;
        type: string;
    };
    boxShadow: {
        value: {
            layers: {
                inset: boolean;
                offsetX: string;
                offsetY: string;
                blur: string;
                spread: string;
                color: string;
            }[];
            stringValue: string;
        };
        type: string;
    };
    minWidth: {
        value: string;
        type: string;
    };
    item: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        destructive: {
            default: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        selected: {
            default: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            active: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            focus: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
        };
        spacing: {
            default: {
                minHeight: {
                    value: string;
                    type: string;
                };
                gap: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            tight: {
                minHeight: {
                    value: string;
                    type: string;
                };
                gap: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
        };
        content: {
            label: {
                default: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                };
                secondary: {
                    fontSize: {
                        value: string;
                        type: string;
                    };
                    fontWeight: {
                        value: number;
                        type: string;
                    };
                    lineHeight: {
                        value: string;
                        type: string;
                    };
                    letterSpacing: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        divider: {
            borderBottomWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
    sectioned: {
        header: {
            gap: {
                value: string;
                type: string;
            };
            padding: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
            borderBottomStyle: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            label: {
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const modal: {
    borderRadius: {
        value: string;
        type: string;
    };
    backgroundColor: {
        value: string;
        type: string;
    };
    color: {
        value: string;
        type: string;
    };
    boxShadow: {
        value: {
            layers: {
                inset: boolean;
                offsetX: string;
                offsetY: string;
                blur: string;
                spread: string;
                color: string;
            }[];
            stringValue: string;
        };
        type: string;
    };
    maxWidth: {
        value: string;
        type: string;
    };
    mobile: {
        maxWidth: {
            value: string;
            type: string;
        };
        borderBottomLeftRadius: {
            value: string;
            type: string;
        };
        borderBottomRightRadius: {
            value: string;
            type: string;
        };
    };
    header: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        description: {
            color: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            marginTop: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
        };
    };
    content: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
    };
    footer: {
        gap: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        borderTopWidth: {
            value: string;
            type: string;
        };
        borderTopStyle: {
            value: string;
            type: string;
        };
        borderTopColor: {
            value: string;
            type: string;
        };
        checkbox: {
            gap: {
                value: string;
                type: string;
            };
        };
    };
};
declare const overlay: {
    backgroundColor: {
        value: string;
        type: string;
    };
    boxShadow: {
        value: {
            layers: {
                inset: boolean;
                offsetX: string;
                offsetY: string;
                blur: string;
                spread: string;
                color: string;
            }[];
            stringValue: string;
        };
        type: string;
    };
};
declare const pageHeader: {
    desktop: {
        container: {
            gap: {
                value: string;
                type: string;
            };
        };
        middleContainer: {
            gap: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
        mainContent: {
            gap: {
                value: string;
                type: string;
            };
        };
        titleContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        statusContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        title: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
        buttonArray: {
            padding: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
        };
    };
    tablet: {
        container: {
            gap: {
                value: string;
                type: string;
            };
        };
        middleContainer: {
            gap: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
        mainContent: {
            gap: {
                value: string;
                type: string;
            };
        };
        titleContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        statusContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        title: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
        buttonArray: {
            padding: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
        };
    };
    mobile: {
        container: {
            gap: {
                value: string;
                type: string;
            };
        };
        middleContainer: {
            gap: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
        mainContent: {
            gap: {
                value: string;
                type: string;
            };
        };
        titleContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        statusContainer: {
            gap: {
                value: string;
                type: string;
            };
        };
        title: {
            fontWeight: {
                value: number;
                type: string;
            };
        };
        buttonArray: {
            padding: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
        };
    };
};
declare const pagination: {
    container: {
        padding: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
    };
    button: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        padding: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        unselected: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        selected: {
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const popover: {
    container: {
        backgroundColor: {
            value: string;
            type: string;
        };
        color: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        maxWidth: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
    };
    content: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
    };
    head: {
        gap: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        title: {
            fontSize: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
        };
    };
    footer: {
        gap: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        borderTopColor: {
            value: string;
            type: string;
        };
        borderTopWidth: {
            value: string;
            type: string;
        };
        borderTopStyle: {
            value: string;
            type: string;
        };
        actions: {
            gap: {
                value: string;
                type: string;
            };
        };
    };
};
declare const radioButton: {
    circle: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
    };
    innerCircle: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
    };
    label: {
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
    };
    unchecked: {
        default: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        focus: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        disabled: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        error: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    checked: {
        default: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        focus: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        disabled: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        error: {
            circle: {
                borderColor: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            innerCircle: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            label: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const radioButtonArray: {
    gap: {
        value: string;
        type: string;
    };
    radioButton: {
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
    };
};
declare const sectionHeader: {
    container: {
        gap: {
            value: string;
            type: string;
        };
    };
    headerBar: {
        gap: {
            value: string;
            type: string;
        };
    };
    headings: {
        gap: {
            value: string;
            type: string;
        };
    };
    leadingItems: {
        gap: {
            value: string;
            type: string;
        };
    };
    trailingItems: {
        gap: {
            value: string;
            type: string;
        };
    };
    heading: {
        h2: {
            title: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
            };
            subtitle: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
        h3: {
            title: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
            };
            subtitle: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
        h4: {
            title: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
            };
            subtitle: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const sideSheet: {
    backgroundColor: {
        value: string;
        type: string;
    };
    color: {
        value: string;
        type: string;
    };
    paddingTop: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    paddingLeft: {
        value: string;
        type: string;
    };
    paddingRight: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    boxShadow: {
        value: {
            layers: {
                inset: boolean;
                offsetX: string;
                offsetY: string;
                blur: string;
                spread: string;
                color: string;
            }[];
            stringValue: string;
        };
        type: string;
    };
    backdrop: {
        backgroundColor: {
            value: string;
            type: string;
        };
    };
    header: {
        gap: {
            value: string;
            type: string;
        };
        content: {
            gap: {
                value: string;
                type: string;
            };
        };
        ai: {
            paddingBlockEnd: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
            glow: {
                height: {
                    value: string;
                    type: string;
                };
                blurRadius: {
                    value: string;
                    type: string;
                };
            };
            icon: {
                paddingBlockStart: {
                    value: string;
                    type: string;
                };
            };
        };
        title: {
            fontWeight: {
                value: number;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
        description: {
            fontWeight: {
                value: number;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    footer: {
        paddingTop: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        borderTopWidth: {
            value: string;
            type: string;
        };
        borderTopStyle: {
            value: string;
            type: string;
        };
        borderTopColor: {
            value: string;
            type: string;
        };
    };
    small: {
        width: {
            value: string;
            type: string;
        };
    };
    medium: {
        width: {
            value: string;
            type: string;
        };
    };
    large: {
        width: {
            value: string;
            type: string;
        };
    };
};
declare const skeleton: {
    background: {
        value: string;
        type: string;
    };
    circular: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
    };
    rounded: {
        borderRadius: {
            value: string;
            type: string;
        };
    };
};
declare const slider: {
    handle: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        borderWidth: {
            value: string;
            type: string;
        };
        borderStyle: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
        };
    };
    track: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        inactive: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        disabledActive: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
    mark: {
        height: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
    };
};
declare const statusIndicator: {
    height: {
        value: string;
        type: string;
    };
    paddingTop: {
        value: string;
        type: string;
    };
    paddingRight: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    paddingLeft: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    borderRadius: {
        value: string;
        type: string;
    };
    label: {
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
    };
    colors: {
        warning: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        success: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        error: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        information: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        generic: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        subtle: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    withIcon: {
        paddingLeft: {
            value: string;
            type: string;
        };
    };
    iconOnly: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
    };
    shapeOnly: {
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        subtle: {
            backgroundColor: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
    };
    shapeWithLabel: {
        gap: {
            value: string;
            type: string;
        };
        label: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
        };
    };
    icon: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
    };
};
declare const stepper: {
    paddingTop: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    gap: {
        value: string;
        type: string;
    };
    step: {
        gap: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            default: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            active: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            completed: {
                background: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            text: {
                fontSize: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                default: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
                active: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        label: {
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            active: {
                fontWeight: {
                    value: number;
                    type: string;
                };
            };
        };
    };
    connector: {
        color: {
            value: string;
            type: string;
        };
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
        atOverflow: {
            width: {
                value: string;
                type: string;
            };
        };
        vertical: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            gap: {
                value: string;
                type: string;
            };
        };
    };
    content: {
        marginLeft: {
            value: string;
            type: string;
        };
    };
};
declare const table: {
    header: {
        backgroundColor: {
            value: string;
            type: string;
        };
        borderBottomColor: {
            value: string;
            type: string;
        };
        borderBottomWidth: {
            value: string;
            type: string;
        };
        borderBottomStyle: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        first: {
            borderTopLeftRadius: {
                value: string;
                type: string;
            };
        };
        last: {
            borderTopRightRadius: {
                value: string;
                type: string;
            };
        };
    };
    row: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
        selected: {
            backgroundColor: {
                value: string;
                type: string;
            };
        };
    };
    cell: {
        borderBottomColor: {
            value: string;
            type: string;
        };
        borderBottomWidth: {
            value: string;
            type: string;
        };
        borderBottomStyle: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        indent: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
    };
    footer: {
        container: {
            gap: {
                value: string;
                type: string;
            };
            marginTop: {
                value: string;
                type: string;
            };
        };
        label: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
        range: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            borderLeftWidth: {
                value: string;
                type: string;
            };
            borderLeftColor: {
                value: string;
                type: string;
            };
            borderLeftStyle: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            total: {
                color: {
                    value: string;
                    type: string;
                };
            };
        };
        rowsPerPages: {
            width: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
        };
    };
    columnSeparator: {
        color: {
            value: string;
            type: string;
        };
    };
    small: {
        header: {
            height: {
                value: string;
                type: string;
            };
        };
        cell: {
            height: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
        footer: {
            width: {
                value: string;
                type: string;
            };
        };
    };
    medium: {
        header: {
            height: {
                value: string;
                type: string;
            };
        };
        cell: {
            height: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
        footer: {
            width: {
                value: string;
                type: string;
            };
        };
    };
    large: {
        header: {
            height: {
                value: string;
                type: string;
            };
        };
        cell: {
            height: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
        };
    };
};
declare const tabs: {
    active: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
        };
        focus: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderBottomColor: {
                value: string;
                type: string;
            };
            borderBottomWidth: {
                value: string;
                type: string;
            };
        };
    };
    inactive: {
        default: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        hover: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        focus: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
        disabled: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
    sizes: {
        small: {
            container: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            button: {
                height: {
                    value: string;
                    type: string;
                };
                borderTopLeftRadius: {
                    value: string;
                    type: string;
                };
                borderTopRightRadius: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                gap: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
        large: {
            container: {
                gap: {
                    value: string;
                    type: string;
                };
            };
            button: {
                height: {
                    value: string;
                    type: string;
                };
                borderTopLeftRadius: {
                    value: string;
                    type: string;
                };
                borderTopRightRadius: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                gap: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    icon: {
        width: {
            value: string;
            type: string;
        };
        height: {
            value: string;
            type: string;
        };
    };
    badge: {
        active: {
            backgroundColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
        };
    };
};
declare const timePicker: {
    section: {
        gap: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        item: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            selected: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
                focus: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
                disabled: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                    borderColor: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
    };
};
declare const toast: {
    container: {
        margin: {
            value: string;
            type: string;
        };
    };
    alert: {
        maxWidth: {
            value: string;
            type: string;
        };
        minWidth: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        minHeight: {
            value: string;
            type: string;
        };
        backgroundColor: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            minHeight: {
                value: string;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingBottom: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            success: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            info: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            warning: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            error: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
            };
            processing: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                minHeight: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
        };
        action: {
            color: {
                value: string;
                type: string;
            };
            backgroundColor: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            borderTopColor: {
                value: string;
                type: string;
            };
            hover: {
                color: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            active: {
                color: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                color: {
                    value: string;
                    type: string;
                };
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
        };
        message: {
            color: {
                value: string;
                type: string;
            };
            fontSize: {
                value: string;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            paddingTop: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        title: {
            fontSize: {
                value: string;
                type: string;
            };
            fontWeight: {
                value: number;
                type: string;
            };
            lineHeight: {
                value: string;
                type: string;
            };
            letterSpacing: {
                value: string;
                type: string;
            };
            marginTop: {
                value: string;
                type: string;
            };
            marginBottom: {
                value: string;
                type: string;
            };
        };
        divided: {
            message: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
            };
            messageWithTitle: {
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingRight: {
                    value: string;
                    type: string;
                };
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            action: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
declare const toggleButtonGroup: {
    unselected: {
        default: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        focus: {
            background: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        disabled: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
    };
    selected: {
        default: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        hover: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        active: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        focus: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
        disabled: {
            background: {
                value: string;
                type: string;
            };
            color: {
                value: string;
                type: string;
            };
            borderColor: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
        };
    };
    small: {
        height: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        first: {
            borderTopLeftRadius: {
                value: string;
                type: string;
            };
            borderBottomLeftRadius: {
                value: string;
                type: string;
            };
        };
        last: {
            borderTopRightRadius: {
                value: string;
                type: string;
            };
            borderBottomRightRadius: {
                value: string;
                type: string;
            };
        };
        iconOnly: {
            width: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        withLeadingIcon: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        withTrailingIcon: {
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
    medium: {
        height: {
            value: string;
            type: string;
        };
        borderRadius: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        gap: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        first: {
            borderTopLeftRadius: {
                value: string;
                type: string;
            };
            borderBottomLeftRadius: {
                value: string;
                type: string;
            };
        };
        last: {
            borderTopRightRadius: {
                value: string;
                type: string;
            };
            borderBottomRightRadius: {
                value: string;
                type: string;
            };
        };
        iconOnly: {
            width: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
        };
        icon: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
        withLeadingIcon: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
        withTrailingIcon: {
            paddingRight: {
                value: string;
                type: string;
            };
        };
    };
};
declare const toggle: {
    checked: {
        default: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        focus: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        disabled: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    unchecked: {
        default: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        hover: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        active: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        focus: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
        disabled: {
            bar: {
                background: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
                borderWidth: {
                    value: string;
                    type: string;
                };
                borderStyle: {
                    value: string;
                    type: string;
                };
            };
            knob: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                borderColor: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    small: {
        bar: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            padding: {
                value: string;
                type: string;
            };
        };
        knob: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            indeterminate: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    large: {
        bar: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            borderRadius: {
                value: string;
                type: string;
            };
            padding: {
                value: string;
                type: string;
            };
        };
        knob: {
            height: {
                value: string;
                type: string;
            };
            width: {
                value: string;
                type: string;
            };
            borderWidth: {
                value: string;
                type: string;
            };
            borderStyle: {
                value: string;
                type: string;
            };
            indeterminate: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                borderRadius: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    label: {
        color: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        leading: {
            paddingRight: {
                value: string;
                type: string;
            };
        };
        trailing: {
            paddingLeft: {
                value: string;
                type: string;
            };
        };
    };
};
declare const tooltip: {
    boxShadow: {
        value: {
            layers: {
                inset: boolean;
                offsetX: string;
                offsetY: string;
                blur: string;
                spread: string;
                color: string;
            }[];
            stringValue: string;
        };
        type: string;
    };
    fontSize: {
        value: string;
        type: string;
    };
    lineHeight: {
        value: string;
        type: string;
    };
    fontWeight: {
        value: number;
        type: string;
    };
    letterSpacing: {
        value: string;
        type: string;
    };
    paddingTop: {
        value: string;
        type: string;
    };
    paddingBottom: {
        value: string;
        type: string;
    };
    paddingLeft: {
        value: string;
        type: string;
    };
    paddingRight: {
        value: string;
        type: string;
    };
    borderRadius: {
        value: string;
        type: string;
    };
    maxWidth: {
        value: string;
        type: string;
    };
    backgroundColor: {
        value: string;
        type: string;
    };
    color: {
        value: string;
        type: string;
    };
    content: {
        lineClamp: {
            value: number;
            type: string;
        };
    };
    xs: {
        borderRadius: {
            value: string;
            type: string;
        };
        paddingTop: {
            value: string;
            type: string;
        };
        paddingBottom: {
            value: string;
            type: string;
        };
        paddingLeft: {
            value: string;
            type: string;
        };
        paddingRight: {
            value: string;
            type: string;
        };
        fontSize: {
            value: string;
            type: string;
        };
        lineHeight: {
            value: string;
            type: string;
        };
        fontWeight: {
            value: number;
            type: string;
        };
        letterSpacing: {
            value: string;
            type: string;
        };
        content: {
            lineClamp: {
                value: number;
                type: string;
            };
        };
        arrow: {
            width: {
                value: string;
                type: string;
            };
            height: {
                value: string;
                type: string;
            };
        };
    };
};
declare const treeView: {
    item: {
        indent: {
            width: {
                value: string;
                type: string;
            };
        };
        content: {
            backgroundColor: {
                value: string;
                type: string;
            };
            paddingLeft: {
                value: string;
                type: string;
            };
            paddingRight: {
                value: string;
                type: string;
            };
            withCheckbox: {
                paddingLeft: {
                    value: string;
                    type: string;
                };
            };
            hover: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
            };
            focus: {
                boxShadow: {
                    value: {
                        layers: {
                            inset: boolean;
                            offsetX: string;
                            offsetY: string;
                            blur: string;
                            spread: string;
                            color: string;
                        }[];
                        stringValue: string;
                    };
                    type: string;
                };
                outlineOffset: {
                    value: string;
                    type: string;
                };
            };
            disabled: {
                icon: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
                label: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
            selected: {
                leftBorderColor: {
                    value: string;
                    type: string;
                };
                leftBorderWidth: {
                    value: string;
                    type: string;
                };
                leftBorderStyle: {
                    value: string;
                    type: string;
                };
                leftBorderRadius: {
                    value: string;
                    type: string;
                };
                default: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
                active: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
            };
            default: {
                height: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
            };
            dense: {
                height: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
            };
            comfortable: {
                height: {
                    value: string;
                    type: string;
                };
                paddingTop: {
                    value: string;
                    type: string;
                };
                paddingBottom: {
                    value: string;
                    type: string;
                };
            };
            label: {
                gap: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                icon: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
            indent: {
                width: {
                    value: string;
                    type: string;
                };
                height: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                container: {
                    width: {
                        value: string;
                        type: string;
                    };
                    height: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
    };
};

declare const component_accordion: typeof accordion;
declare const component_aiChatBox: typeof aiChatBox;
declare const component_aiChatContent: typeof aiChatContent;
declare const component_aiChatUi: typeof aiChatUi;
declare const component_aiContextPanel: typeof aiContextPanel;
declare const component_aiDisclaimer: typeof aiDisclaimer;
declare const component_aiGlow: typeof aiGlow;
declare const component_aiLoadingIndicator: typeof aiLoadingIndicator;
declare const component_aiThinkingIndicator: typeof aiThinkingIndicator;
declare const component_alert: typeof alert;
declare const component_avatar: typeof avatar;
declare const component_avatarGroup: typeof avatarGroup;
declare const component_backdrop: typeof backdrop;
declare const component_badge: typeof badge;
declare const component_breadcrumbs: typeof breadcrumbs;
declare const component_button: typeof button;
declare const component_buttonArray: typeof buttonArray;
declare const component_buttonTile: typeof buttonTile;
declare const component_calendar: typeof calendar;
declare const component_card: typeof card;
declare const component_checkbox: typeof checkbox;
declare const component_chip: typeof chip;
declare const component_datePicker: typeof datePicker;
declare const component_divider: typeof divider;
declare const component_dragAndDrop: typeof dragAndDrop;
declare const component_dropdown: typeof dropdown;
declare const component_filterToolbar: typeof filterToolbar;
declare const component_footer: typeof footer;
declare const component_formField: typeof formField;
declare const component_globalHeader: typeof globalHeader;
declare const component_globalNav: typeof globalNav;
declare const component_input: typeof input;
declare const component_link: typeof link;
declare const component_list: typeof list;
declare const component_loadingIndicator: typeof loadingIndicator;
declare const component_menu: typeof menu;
declare const component_modal: typeof modal;
declare const component_overlay: typeof overlay;
declare const component_pageHeader: typeof pageHeader;
declare const component_pagination: typeof pagination;
declare const component_popover: typeof popover;
declare const component_radioButton: typeof radioButton;
declare const component_radioButtonArray: typeof radioButtonArray;
declare const component_sectionHeader: typeof sectionHeader;
declare const component_sideSheet: typeof sideSheet;
declare const component_skeleton: typeof skeleton;
declare const component_slider: typeof slider;
declare const component_splitButton: typeof splitButton;
declare const component_statusIndicator: typeof statusIndicator;
declare const component_stepper: typeof stepper;
declare const component_table: typeof table;
declare const component_tabs: typeof tabs;
declare const component_timePicker: typeof timePicker;
declare const component_toast: typeof toast;
declare const component_toggle: typeof toggle;
declare const component_toggleButtonGroup: typeof toggleButtonGroup;
declare const component_tooltip: typeof tooltip;
declare const component_treeView: typeof treeView;
declare namespace component {
  export { component_accordion as accordion, component_aiChatBox as aiChatBox, component_aiChatContent as aiChatContent, component_aiChatUi as aiChatUi, component_aiContextPanel as aiContextPanel, component_aiDisclaimer as aiDisclaimer, component_aiGlow as aiGlow, component_aiLoadingIndicator as aiLoadingIndicator, component_aiThinkingIndicator as aiThinkingIndicator, component_alert as alert, component_avatar as avatar, component_avatarGroup as avatarGroup, component_backdrop as backdrop, component_badge as badge, component_breadcrumbs as breadcrumbs, component_button as button, component_buttonArray as buttonArray, component_buttonTile as buttonTile, component_calendar as calendar, component_card as card, component_checkbox as checkbox, component_chip as chip, component_datePicker as datePicker, component_divider as divider, component_dragAndDrop as dragAndDrop, component_dropdown as dropdown, component_filterToolbar as filterToolbar, component_footer as footer, component_formField as formField, component_globalHeader as globalHeader, component_globalNav as globalNav, component_input as input, component_link as link, component_list as list, component_loadingIndicator as loadingIndicator, component_menu as menu, component_modal as modal, component_overlay as overlay, component_pageHeader as pageHeader, component_pagination as pagination, component_popover as popover, component_radioButton as radioButton, component_radioButtonArray as radioButtonArray, component_sectionHeader as sectionHeader, component_sideSheet as sideSheet, component_skeleton as skeleton, component_slider as slider, component_splitButton as splitButton, component_statusIndicator as statusIndicator, component_stepper as stepper, component_table as table, component_tabs as tabs, component_timePicker as timePicker, component_toast as toast, component_toggle as toggle, component_toggleButtonGroup as toggleButtonGroup, component_tooltip as tooltip, component_treeView as treeView };
}

declare const core: {
    borderStyle: {
        solid: {
            value: string;
            type: string;
        };
        dashed: {
            value: string;
            type: string;
        };
        dotted: {
            value: string;
            type: string;
        };
    };
    color: {
        brand: {
            primary: {
                diligentRed: {
                    value: string;
                    type: string;
                };
                red2: {
                    value: string;
                    type: string;
                };
                red3: {
                    value: string;
                    type: string;
                };
                red4: {
                    value: string;
                    type: string;
                };
                red5: {
                    value: string;
                    type: string;
                };
            };
            secondary: {
                blue1: {
                    value: string;
                    type: string;
                };
                blue2: {
                    value: string;
                    type: string;
                };
                blue3: {
                    value: string;
                    type: string;
                };
                purple1: {
                    value: string;
                    type: string;
                };
                purple2: {
                    value: string;
                    type: string;
                };
                purple3: {
                    value: string;
                    type: string;
                };
            };
            neutral: {
                gray1: {
                    value: string;
                    type: string;
                };
                gray2: {
                    value: string;
                    type: string;
                };
                gray3: {
                    value: string;
                    type: string;
                };
                gray4: {
                    value: string;
                    type: string;
                };
                gray5: {
                    value: string;
                    type: string;
                };
            };
        };
        gray: {
            "0": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
            "200": {
                value: string;
                type: string;
            };
            "300": {
                value: string;
                type: string;
            };
            "400": {
                value: string;
                type: string;
            };
            "500": {
                value: string;
                type: string;
            };
            "600": {
                value: string;
                type: string;
            };
            "700": {
                value: string;
                type: string;
            };
            "800": {
                value: string;
                type: string;
            };
            "900": {
                value: string;
                type: string;
            };
            "950": {
                value: string;
                type: string;
            };
            "1000": {
                value: string;
                type: string;
            };
        };
        green: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        blue: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        yellow: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        purple: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        red: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        flamingo: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        indigo: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        ocean: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        sky: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        moss: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        olive: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        orange: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        lavender: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        concrete: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        storm: {
            "0": {
                value: string;
                type: string;
            };
            "5": {
                value: string;
                type: string;
            };
            "10": {
                value: string;
                type: string;
            };
            "15": {
                value: string;
                type: string;
            };
            "20": {
                value: string;
                type: string;
            };
            "25": {
                value: string;
                type: string;
            };
            "30": {
                value: string;
                type: string;
            };
            "35": {
                value: string;
                type: string;
            };
            "40": {
                value: string;
                type: string;
            };
            "50": {
                value: string;
                type: string;
            };
            "60": {
                value: string;
                type: string;
            };
            "70": {
                value: string;
                type: string;
            };
            "80": {
                value: string;
                type: string;
            };
            "90": {
                value: string;
                type: string;
            };
            "95": {
                value: string;
                type: string;
            };
            "98": {
                value: string;
                type: string;
            };
            "99": {
                value: string;
                type: string;
            };
            "100": {
                value: string;
                type: string;
            };
        };
        transparent: {
            value: string;
            type: string;
        };
        white: {
            value: string;
            type: string;
        };
    };
    shadow: {
        low: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        medium: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        high: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
    };
    spacing: {
        "0": {
            value: string;
            type: string;
        };
        "1": {
            value: string;
            type: string;
        };
        "2": {
            value: string;
            type: string;
        };
        "3": {
            value: string;
            type: string;
        };
        "4": {
            value: string;
            type: string;
        };
        "5": {
            value: string;
            type: string;
        };
        "6": {
            value: string;
            type: string;
        };
        "7": {
            value: string;
            type: string;
        };
        "8": {
            value: string;
            type: string;
        };
        "9": {
            value: string;
            type: string;
        };
        px: {
            value: string;
            type: string;
        };
        "0_25": {
            value: string;
            type: string;
        };
        "0_5": {
            value: string;
            type: string;
        };
        "1_5": {
            value: string;
            type: string;
        };
        "2_5": {
            value: string;
            type: string;
        };
        "4_5": {
            value: string;
            type: string;
        };
    };
    breakpoints: {
        sm: {
            min: {
                value: string;
                type: string;
            };
            max: {
                value: string;
                type: string;
            };
        };
        md: {
            min: {
                value: string;
                type: string;
            };
            max: {
                value: string;
                type: string;
            };
        };
        lg: {
            min: {
                value: string;
                type: string;
            };
            max: {
                value: string;
                type: string;
            };
        };
        xl: {
            min: {
                value: string;
                type: string;
            };
            max: {
                value: string;
                type: string;
            };
        };
    };
    fontFamily: {
        plusJakartaSans: {
            value: string;
            type: string;
        };
    };
    textDecoration: {
        none: {
            value: string;
            type: string;
        };
        underline: {
            value: string;
            type: string;
        };
    };
    fontWeight: {
        extraLight: {
            value: number;
            type: string;
        };
        light: {
            value: number;
            type: string;
        };
        regular: {
            value: number;
            type: string;
        };
        medium: {
            value: number;
            type: string;
        };
        semiBold: {
            value: number;
            type: string;
        };
        bold: {
            value: number;
            type: string;
        };
        extraBold: {
            value: number;
            type: string;
        };
    };
    textTransform: {
        none: {
            value: string;
            type: string;
        };
        uppercase: {
            value: string;
            type: string;
        };
        lowercase: {
            value: string;
            type: string;
        };
        capitalize: {
            value: string;
            type: string;
        };
    };
};
declare const semantic: {
    color: {
        action: {
            primary: {
                default: {
                    value: string;
                    type: string;
                };
                defaultGradientStart: {
                    value: string;
                    type: string;
                };
                defaultGradientEnd: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                hoverGradientStart: {
                    value: string;
                    type: string;
                };
                hoverGradientEnd: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                activeGradientStart: {
                    value: string;
                    type: string;
                };
                activeGradientEnd: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
                onPrimary: {
                    value: string;
                    type: string;
                };
                onPrimaryDisabled: {
                    value: string;
                    type: string;
                };
            };
            secondary: {
                variant: {
                    value: string;
                    type: string;
                };
                outline: {
                    value: string;
                    type: string;
                };
                hoverFill: {
                    value: string;
                    type: string;
                };
                activeFill: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                disabledOutline: {
                    value: string;
                    type: string;
                };
                onSecondary: {
                    value: string;
                    type: string;
                };
                onSecondaryDisabled: {
                    value: string;
                    type: string;
                };
            };
            destructive: {
                default: {
                    value: string;
                    type: string;
                };
                defaultGradientStart: {
                    value: string;
                    type: string;
                };
                defaultGradientEnd: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                hoverGradientStart: {
                    value: string;
                    type: string;
                };
                hoverGradientEnd: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                activeGradientStart: {
                    value: string;
                    type: string;
                };
                activeGradientEnd: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
                onDestructive: {
                    value: string;
                    type: string;
                };
                onDestructiveDisabled: {
                    value: string;
                    type: string;
                };
            };
            secondaryDestructive: {
                default: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                onSecondaryDisabled: {
                    value: string;
                    type: string;
                };
                outlineDisabled: {
                    value: string;
                    type: string;
                };
            };
            calendar: {
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
                selected: {
                    value: string;
                    type: string;
                };
                selectedHover: {
                    value: string;
                    type: string;
                };
                selectedActive: {
                    value: string;
                    type: string;
                };
                highlighted: {
                    value: string;
                    type: string;
                };
                onCalendar: {
                    value: string;
                    type: string;
                };
                onCalendarDisabled: {
                    value: string;
                    type: string;
                };
                onCalendarSelected: {
                    value: string;
                    type: string;
                };
            };
            link: {
                default: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
            };
            secondaryInverse: {
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                selected: {
                    value: string;
                    type: string;
                };
                onSelected: {
                    value: string;
                    type: string;
                };
                onSecondaryInverse: {
                    value: string;
                    type: string;
                };
                onSecondaryInverseMuted: {
                    value: string;
                    type: string;
                };
                onSecondaryInverseDisabled: {
                    value: string;
                    type: string;
                };
                highlighted: {
                    value: string;
                    type: string;
                };
                selectionIndicator: {
                    value: string;
                    type: string;
                };
                outline: {
                    value: string;
                    type: string;
                };
                outlineDisabled: {
                    value: string;
                    type: string;
                };
                selectionIndicatorTabs: {
                    value: string;
                    type: string;
                };
            };
            form: {
                default: {
                    value: string;
                    type: string;
                };
                defaultSelected: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                hoverSelected: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                activeSelected: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
                disabledSelected: {
                    value: string;
                    type: string;
                };
                outline: {
                    value: string;
                    type: string;
                };
                outlineSelected: {
                    value: string;
                    type: string;
                };
                outlineHoverSelected: {
                    value: string;
                    type: string;
                };
                outlinePressSelected: {
                    value: string;
                    type: string;
                };
                outlineDisabled: {
                    value: string;
                    type: string;
                };
                indicator: {
                    value: string;
                    type: string;
                };
                indicatorDisabled: {
                    value: string;
                    type: string;
                };
                error: {
                    value: string;
                    type: string;
                };
                hoverHighlight: {
                    value: string;
                    type: string;
                };
            };
            aiPrimary: {
                defaultGradientStart: {
                    value: string;
                    type: string;
                };
                defaultGradientEnd: {
                    value: string;
                    type: string;
                };
                hoverGradientStart: {
                    value: string;
                    type: string;
                };
                hoverGradientEnd: {
                    value: string;
                    type: string;
                };
                activeGradientStart: {
                    value: string;
                    type: string;
                };
                activeGradientEnd: {
                    value: string;
                    type: string;
                };
                disabledGradientStart: {
                    value: string;
                    type: string;
                };
                disabledGradientEnd: {
                    value: string;
                    type: string;
                };
                onAiPrimary: {
                    value: string;
                    type: string;
                };
                onAiPrimaryDisabled: {
                    value: string;
                    type: string;
                };
            };
        };
        ai: {
            default: {
                gradientStart: {
                    value: string;
                    type: string;
                };
                gradientMiddle: {
                    value: string;
                    type: string;
                };
                gradientEnd: {
                    value: string;
                    type: string;
                };
            };
        };
        selection: {
            primary: {
                default: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                onSelected: {
                    value: string;
                    type: string;
                };
                selectionIndicator: {
                    value: string;
                    type: string;
                };
            };
            secondary: {
                default: {
                    value: string;
                    type: string;
                };
                hover: {
                    value: string;
                    type: string;
                };
                active: {
                    value: string;
                    type: string;
                };
                selectionIndicator: {
                    value: string;
                    type: string;
                };
                disabled: {
                    value: string;
                    type: string;
                };
                onDisabled: {
                    value: string;
                    type: string;
                };
            };
        };
        type: {
            default: {
                value: string;
                type: string;
            };
            muted: {
                value: string;
                type: string;
            };
            disabled: {
                value: string;
                type: string;
            };
            inverse: {
                value: string;
                type: string;
            };
        };
        background: {
            base: {
                value: string;
                type: string;
            };
            baseGradientStart: {
                value: string;
                type: string;
            };
            baseGradientEnd: {
                value: string;
                type: string;
            };
            container: {
                value: string;
                type: string;
            };
            navSelection: {
                value: string;
                type: string;
            };
            backdrop: {
                value: string;
                type: string;
            };
        };
        accent: {
            red: {
                background: {
                    value: string;
                    type: string;
                };
                content: {
                    value: string;
                    type: string;
                };
            };
            yellow: {
                background: {
                    value: string;
                    type: string;
                };
                content: {
                    value: string;
                    type: string;
                };
            };
            green: {
                background: {
                    value: string;
                    type: string;
                };
                content: {
                    value: string;
                    type: string;
                };
            };
            blue: {
                background: {
                    value: string;
                    type: string;
                };
                content: {
                    value: string;
                    type: string;
                };
            };
            purple: {
                background: {
                    value: string;
                    type: string;
                };
                content: {
                    value: string;
                    type: string;
                };
            };
        };
        ui: {
            focusRing: {
                value: string;
                type: string;
            };
            focusInverse: {
                value: string;
                type: string;
            };
            loading: {
                default: {
                    value: string;
                    type: string;
                };
                variant: {
                    value: string;
                    type: string;
                };
            };
            divider: {
                default: {
                    value: string;
                    type: string;
                };
                secondary: {
                    value: string;
                    type: string;
                };
            };
            scrollbar: {
                handle: {
                    value: string;
                    type: string;
                };
            };
        };
        status: {
            success: {
                default: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
                background: {
                    value: string;
                    type: string;
                };
                text: {
                    value: string;
                    type: string;
                };
            };
            warning: {
                default: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
                background: {
                    value: string;
                    type: string;
                };
                text: {
                    value: string;
                    type: string;
                };
            };
            notification: {
                default: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
                background: {
                    value: string;
                    type: string;
                };
                text: {
                    value: string;
                    type: string;
                };
            };
            error: {
                default: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
                background: {
                    value: string;
                    type: string;
                };
                text: {
                    value: string;
                    type: string;
                };
            };
            new: {
                default: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
            };
            neutral: {
                background: {
                    value: string;
                    type: string;
                };
                textDefault: {
                    value: string;
                    type: string;
                };
                backgroundVariant: {
                    value: string;
                    type: string;
                };
                text: {
                    value: string;
                    type: string;
                };
            };
        };
        dataVisualization: {
            qualitative: {
                blue: {
                    "0_25": {
                        value: string;
                        type: string;
                    };
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                };
                purple: {
                    "0_25": {
                        value: string;
                        type: string;
                    };
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                };
                gray: {
                    "0_25": {
                        value: string;
                        type: string;
                    };
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                };
                turquoise: {
                    "0_25": {
                        value: string;
                        type: string;
                    };
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                };
            };
            sequential: {
                positive: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
                negative: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
                neutral: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
            };
            rag: {
                positive: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
                negative: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
                neutral: {
                    "0_50": {
                        value: string;
                        type: string;
                    };
                    "0_75": {
                        value: string;
                        type: string;
                    };
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                };
            };
            multiHue: {
                oceanOrange: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
                skyFlamingo: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
                greenRed: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
            };
            divergent: {
                blueYellow: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
                blueLavender: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
                mossOrange: {
                    "01": {
                        value: string;
                        type: string;
                    };
                    "02": {
                        value: string;
                        type: string;
                    };
                    "03": {
                        value: string;
                        type: string;
                    };
                    "04": {
                        value: string;
                        type: string;
                    };
                    "05": {
                        value: string;
                        type: string;
                    };
                    "06": {
                        value: string;
                        type: string;
                    };
                    "07": {
                        value: string;
                        type: string;
                    };
                    "08": {
                        value: string;
                        type: string;
                    };
                };
            };
        };
        surface: {
            default: {
                value: string;
                type: string;
            };
            variant: {
                value: string;
                type: string;
            };
            subtle: {
                value: string;
                type: string;
            };
            inverse: {
                value: string;
                type: string;
            };
        };
        outline: {
            fixed: {
                value: string;
                type: string;
            };
            default: {
                value: string;
                type: string;
            };
            hover: {
                value: string;
                type: string;
            };
            active: {
                value: string;
                type: string;
            };
            disabled: {
                value: string;
                type: string;
            };
        };
        globalNav: {
            container: {
                backgroundColor: {
                    value: string;
                    type: string;
                };
                color: {
                    value: string;
                    type: string;
                };
                borderRightColor: {
                    value: string;
                    type: string;
                };
            };
            item: {
                default: {
                    color: {
                        value: string;
                        type: string;
                    };
                };
                hover: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                };
                current: {
                    backgroundColor: {
                        value: string;
                        type: string;
                    };
                    color: {
                        value: string;
                        type: string;
                    };
                };
            };
        };
    };
    shadow: {
        focus: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
        focusInset: {
            value: {
                layers: {
                    inset: boolean;
                    offsetX: string;
                    offsetY: string;
                    blur: string;
                    spread: string;
                    color: string;
                }[];
                stringValue: string;
            };
            type: string;
        };
    };
    gradients: {
        primary: {
            default: {
                value: string;
                type: string;
            };
            hover: {
                value: string;
                type: string;
            };
            active: {
                value: string;
                type: string;
            };
        };
        destructive: {
            default: {
                value: string;
                type: string;
            };
            hover: {
                value: string;
                type: string;
            };
            active: {
                value: string;
                type: string;
            };
        };
        ai: {
            default: {
                value: string;
                type: string;
            };
            defaultVertical: {
                value: string;
                type: string;
            };
            defaultHorizontal: {
                value: string;
                type: string;
            };
            highlight: {
                value: string;
                type: string;
            };
            shape: {
                value: string;
                type: string;
            };
        };
        aiPrimary: {
            default: {
                value: string;
                type: string;
            };
            hover: {
                value: string;
                type: string;
            };
            active: {
                value: string;
                type: string;
            };
            disabled: {
                value: string;
                type: string;
            };
        };
        background: {
            default: {
                value: string;
                type: string;
            };
        };
    };
    spacing: {
        desktop: {
            gap: {
                "0": {
                    value: string;
                    type: string;
                };
                "1": {
                    value: string;
                    type: string;
                };
                "2": {
                    value: string;
                    type: string;
                };
                "3": {
                    value: string;
                    type: string;
                };
                "4": {
                    value: string;
                    type: string;
                };
                "5": {
                    value: string;
                    type: string;
                };
                "6": {
                    value: string;
                    type: string;
                };
                "7": {
                    value: string;
                    type: string;
                };
                "8": {
                    value: string;
                    type: string;
                };
                "9": {
                    value: string;
                    type: string;
                };
                px: {
                    value: string;
                    type: string;
                };
                "0_25": {
                    value: string;
                    type: string;
                };
                "0_5": {
                    value: string;
                    type: string;
                };
                "1_5": {
                    value: string;
                    type: string;
                };
                "2_5": {
                    value: string;
                    type: string;
                };
                "4_5": {
                    value: string;
                    type: string;
                };
            };
            padding: {
                "0": {
                    value: string;
                    type: string;
                };
                "1": {
                    value: string;
                    type: string;
                };
                "2": {
                    value: string;
                    type: string;
                };
                "3": {
                    value: string;
                    type: string;
                };
                "4": {
                    value: string;
                    type: string;
                };
                "5": {
                    value: string;
                    type: string;
                };
                "6": {
                    value: string;
                    type: string;
                };
                "7": {
                    value: string;
                    type: string;
                };
                "8": {
                    value: string;
                    type: string;
                };
                "9": {
                    value: string;
                    type: string;
                };
                px: {
                    value: string;
                    type: string;
                };
                "0_25": {
                    value: string;
                    type: string;
                };
                "0_5": {
                    value: string;
                    type: string;
                };
                "1_5": {
                    value: string;
                    type: string;
                };
                "2_5": {
                    value: string;
                    type: string;
                };
                "4_5": {
                    value: string;
                    type: string;
                };
            };
        };
    };
    borderWidth: {
        thin: {
            value: string;
            type: string;
        };
        thick: {
            value: string;
            type: string;
        };
        focusWidth: {
            value: string;
            type: string;
        };
        focusOffset: {
            value: string;
            type: string;
        };
    };
    iconSize: {
        sm: {
            value: string;
            type: string;
        };
        md: {
            value: string;
            type: string;
        };
        lg: {
            value: string;
            type: string;
        };
        xl: {
            value: string;
            type: string;
        };
        "2xl": {
            value: string;
            type: string;
        };
    };
    radius: {
        none: {
            value: string;
            type: string;
        };
        sm: {
            value: string;
            type: string;
        };
        md: {
            value: string;
            type: string;
        };
        lg: {
            value: string;
            type: string;
        };
        xl: {
            value: string;
            type: string;
        };
        "2xl": {
            value: string;
            type: string;
        };
        full: {
            value: string;
            type: string;
        };
    };
    layout: {
        sm: {
            minWidth: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            columns: {
                value: number;
                type: string;
            };
            columnGap: {
                value: string;
                type: string;
            };
            marginLeft: {
                value: string;
                type: string;
            };
            marginRight: {
                value: string;
                type: string;
            };
        };
        md: {
            minWidth: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            columns: {
                value: number;
                type: string;
            };
            columnGap: {
                value: string;
                type: string;
            };
            marginLeft: {
                value: string;
                type: string;
            };
            marginRight: {
                value: string;
                type: string;
            };
        };
        lg: {
            minWidth: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            columns: {
                value: number;
                type: string;
            };
            columnGap: {
                value: string;
                type: string;
            };
            marginLeft: {
                value: string;
                type: string;
            };
            marginRight: {
                value: string;
                type: string;
            };
        };
        xl: {
            minWidth: {
                value: string;
                type: string;
            };
            maxWidth: {
                value: string;
                type: string;
            };
            columns: {
                value: number;
                type: string;
            };
            columnGap: {
                value: string;
                type: string;
            };
            marginLeft: {
                value: string;
                type: string;
            };
            marginRight: {
                value: string;
                type: string;
            };
        };
    };
    fontFamily: {
        body: {
            value: string;
            type: string;
        };
        title: {
            value: string;
            type: string;
        };
        label: {
            value: string;
            type: string;
        };
    };
    fontWeight: {
        regular: {
            value: number;
            type: string;
        };
        emphasis: {
            value: number;
            type: string;
        };
        bold: {
            value: number;
            type: string;
        };
        link: {
            value: number;
            type: string;
        };
    };
    letterSpacing: {
        normal: {
            value: string;
            type: string;
        };
        xs: {
            value: string;
            type: string;
        };
        sm: {
            value: string;
            type: string;
        };
        md: {
            value: string;
            type: string;
        };
    };
    font: {
        text: {
            body: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            md: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            sm: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
        };
        title: {
            h1Billboard: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            h2Display: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            h3Lg: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            h4Md: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            h5Sm: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            h6Xs: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
        };
        label: {
            lg: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            sm: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
            xs: {
                fontFamily: {
                    value: string;
                    type: string;
                };
                fontSize: {
                    value: string;
                    type: string;
                };
                fontWeight: {
                    value: number;
                    type: string;
                };
                letterSpacing: {
                    value: string;
                    type: string;
                };
                lineHeight: {
                    value: string;
                    type: string;
                };
                textTransform: {
                    value: string;
                    type: string;
                };
                textDecoration: {
                    value: string;
                    type: string;
                };
            };
        };
    };
};
interface LensThemeTokens {
    core: typeof core;
    semantic: typeof semantic;
    component: typeof component;
}

interface DataGridPresets {
    noZebraStripes: {
        slotProps: {
            row: Partial<GridRowParams>;
        };
    };
    noHeaderBackground: {
        slotProps: {
            grid: {
                sx: SxProps;
            };
        };
    };
}

declare module "@diligentcorp/atlas-theme-mui-presets" {
  export interface Presets {
    DataGridPresets: DataGridPresets;
  }
}

interface DatePickerPresets {
    withAtlasToolbar<TA11yDom extends boolean = true>(props: {
        selectDateLabel: string;
        selectYearLabel: string;
    }): Partial<DatePickerProps<TA11yDom>>;
    withAtlasActionBar<TA11yDom extends boolean = true>(props: {
        applyButtonLabel: string;
        cancelButtonLabel: string;
    }): Partial<DatePickerProps<TA11yDom>>;
}
interface TimePickerPresets {
    withAtlasActionBar<TA11yDom extends boolean = true>(props: {
        applyButtonLabel: string;
    }): Partial<TimePickerProps<TA11yDom>>;
}

declare module "@diligentcorp/atlas-theme-mui-presets" {
  export interface Presets {
    DatePickerPresets: DatePickerPresets;
    TimePickerPresets: TimePickerPresets;
  }
}

declare const TREE_ITEM_SPACING: readonly ["default", "dense", "comfortable"];
type TreeItemSpacing = (typeof TREE_ITEM_SPACING)[number];
interface TreeViewPresets {
    getTreeItemSpacing: (spacing: TreeItemSpacing, depth: number) => SxProps;
}

declare module "@diligentcorp/atlas-theme-mui-presets" {
  export interface Presets {
    TreeViewPresets: TreeViewPresets;
  }
}

interface Presets {}

type CircularProgressAtlasProps$1 = Pick<AlertProps, "sx">;
interface AlertPresets {
    fixed: CircularProgressAtlasProps$1;
}
declare const AlertPresets: (tokens: LensThemeTokens) => AlertPresets;

declare const splitButtonPresets: <T extends LensThemeTokens>(tokens: T) => ButtonGroupProps;

interface ButtonTileProps extends ButtonProps {
    muted?: boolean;
    statusIndicator?: React$1.ReactNode;
    tokens: LensThemeTokens;
}
declare function ButtonTile({ tokens, sx, muted, statusIndicator, endIcon, size, children, ...otherProps }: ButtonTileProps): react_jsx_runtime.JSX.Element;
interface ButtonTilePresets {
    components: {
        ButtonTile: typeof ButtonTile;
    };
}
declare const ButtonTilePresets: (tokens: LensThemeTokens) => ButtonTilePresets;

type CircularProgressAtlasProps = Pick<CircularProgressProps, "size" | "sx">;
interface CircularProgressPresets {
    size: {
        sm: CircularProgressAtlasProps;
        md: CircularProgressAtlasProps;
        lg: CircularProgressAtlasProps;
    };
}
declare const CircularProgressPresets: (tokens: LensThemeTokens) => CircularProgressPresets;

type TitleTextVariant = Extract<TypographyVariant, "body1" | "h4" | "h3" | "h2">;
interface AtlasAccordionHeaderProps {
    titleTextProps: {
        text: string;
        variant?: TitleTextVariant;
        component?: TypographyProps["component"];
    };
    subtitleText?: string;
    children?: React__default.ReactNode;
}
interface AtlasAccordionPresetsProps {
    components: {
        Header: React__default.FC<AtlasAccordionHeaderProps>;
    };
}
declare const AccordionPresets: () => AtlasAccordionPresetsProps;

declare enum OptionType {
    user = "user",
    group = "group"
}
interface User {
    label: string;
    id: string;
    email: string;
    type: OptionType;
}
interface Group {
    label: string;
    id: string;
    type: OptionType;
}
interface GroupHeadingTranslation {
    users: string;
    groups: string;
}
interface UserLookupPresets {
    type: {
        single: {
            getStartAdornment: (value: User | Group, inputValue: string) => React.ReactNode;
        };
        multiple: {
            renderTags: (value: Array<User | Group>, getTagProps: (params: {
                index: number;
            }) => ChipProps) => React.ReactNode;
        };
    };
    getGroupBy: (translation: GroupHeadingTranslation) => (option: User | Group) => string;
    renderOption: (props: ListItemProps, option: User | Group) => React.ReactNode;
}
interface AutocompletePresets {
    userLookup: UserLookupPresets;
}
declare const autocompletePresets: (tokens: LensThemeTokens) => AutocompletePresets;

interface AvatarSizes {
    small: true;
    medium: true;
    large: true;
    xlarge: true;
}
interface AvatarColors {
    red: true;
    yellow: true;
    green: true;
    blue: true;
    purple: true;
}
type FilterFalseKeys<T> = {
    [K in keyof T]: T[K] extends false ? never : K;
}[keyof T];
type ResolveOverrides<TDefault, TOverrides> = {
    [K in FilterFalseKeys<TOverrides> | keyof TDefault]: K extends keyof TOverrides ? TOverrides[K] extends false ? never : TOverrides[K] : K extends keyof TDefault ? TDefault[K] : never;
};
type MergedWithOverrides<TDefault, TOverrides> = FilterFalseKeys<ResolveOverrides<TDefault, TOverrides>>;
interface OverridableAvatarSizes {
}
interface OverridableAvatarColors {
}
type AvatarSize = MergedWithOverrides<AvatarSizes, OverridableAvatarSizes>;
type AvatarColor = MergedWithOverrides<AvatarColors, OverridableAvatarColors>;
interface AvatarPresetsType {
    getAvatarProps: (props: {
        size: AvatarSize;
        uniqueId?: string;
        color?: AvatarColor;
    }) => AvatarProps;
}
declare const AvatarPresets: (tokens: LensThemeTokens) => AvatarPresetsType;

interface BadgePresets {
    size: {
        md: BadgeProps;
    };
}
declare const badgePresets: <T extends LensThemeTokens>(tokens: T) => BadgePresets;

interface AtlasCardHeaderIconProps {
    icon: JSX.Element;
}
type GetLayoutProps = (layout?: "horizontal" | "vertical", withMedia?: boolean) => {
    sx: SxProps<Theme>;
};
declare function AtlasCardHeaderIcon({ icon }: AtlasCardHeaderIconProps): react_jsx_runtime.JSX.Element;
interface CardComponentsPresetsProps {
    components: {
        CardHeaderIcon: typeof AtlasCardHeaderIcon;
    };
    getLayoutProps: GetLayoutProps;
}
declare const CardComponentsPresets: (tokens: LensThemeTokens) => CardComponentsPresetsProps;

interface ChipPreset {
    sx: ChipProps$1["sx"];
}
interface ChipPresets {
    selected: ChipPreset;
    filledSelected: ChipPreset;
}
declare const chipPresets: <T extends LensThemeTokens>(tokens: T) => ChipPresets;

interface AtlasDividerProps extends DividerProps {
    color?: "default" | "secondary";
    dividerStyle?: "solid" | "dashed";
}
declare function AtlasDivider({ color, dividerStyle, ...props }: AtlasDividerProps): react_jsx_runtime.JSX.Element;
interface DividerPresetsProps {
    components: {
        Divider: typeof AtlasDivider;
    };
}
declare const DividerPresets: () => DividerPresetsProps;

type Option = {
    key: string;
    value: string;
};
interface RenderValueProps {
    value: string | string[];
    options?: Option[];
    placeholderText?: string;
    chips?: boolean;
    /**
     * @deprecated Use getChipsProps instead. Pass onDelete in the returned ChipProps object.
     * @example
     * // Instead of: onRemove={(value) => handleRemove(value)}
     * // Use: getChipsProps={(value) => ({ onDelete: () => handleRemove(value) })}
     */
    onRemove?: (value: string) => void;
    getChipsProps?: (value: string) => ChipProps;
    chipsProps?: ChipProps;
}
interface DropdownBoxProps {
    open: boolean;
    onClose: () => void;
    paperProps?: PaperProps;
    searchInputProps?: TextFieldProps;
    children: React__default.ReactNode;
    primaryAction?: ButtonProps;
    secondaryAction?: ButtonProps;
    mainContent: React__default.ReactNode;
    title: React__default.ReactNode;
}
interface DropdownPresetsProps {
    components: {
        Dropdown: {
            RenderValue: (props: RenderValueProps) => React__default.ReactElement;
            DropdownBox: (props: DropdownBoxProps) => React__default.ReactElement;
            DropdownBoxListHeader: (props: {
                children: React__default.ReactNode;
            }) => React__default.ReactElement;
            GetMenuItemProps: (props: {
                active?: boolean;
                noHits?: boolean;
            }) => {
                className: string;
                sx: object;
            };
        };
    };
}
declare const DropdownPresets: (tokens: LensThemeTokens) => DropdownPresetsProps;

type IconSizes = "sm" | "md" | "lg" | "xl" | "2xl";
type IconVariants = "outlined" | "filled";

type SizeType$1 = Exclude<IconSizes, "sm">;
declare const _default$1: React__default.ForwardRefExoticComponent<Omit<React__default.SVGProps<SVGSVGElement> & {
    variant?: IconVariants | undefined;
    size?: SizeType$1 | undefined;
    slot?: string;
}, "ref"> & React__default.RefAttributes<SVGSVGElement>>;

type SizeType = Exclude<IconSizes, "sm">;
declare const _default: React__default.ForwardRefExoticComponent<Omit<React__default.SVGProps<SVGSVGElement> & {
    variant?: IconVariants | undefined;
    size?: SizeType | undefined;
    slot?: string;
}, "ref"> & React__default.RefAttributes<SVGSVGElement>>;

interface FormControlMessageWithIconProps extends PropsWithChildren {
    sx?: SxProps;
    slotProps?: {
        icon?: ComponentProps<typeof _default$1 | typeof _default>;
    };
}
interface FormControlPresetsType {
    ErrorMessageWithIcon: FC<FormControlMessageWithIconProps>;
    SuccessMessageWithIcon: FC<FormControlMessageWithIconProps>;
    requiredIndicatorProps: (localizedString?: string) => {
        sx: SxProps;
    };
    optionalIndicatorProps: (localizedString?: string) => {
        sx: SxProps;
    };
}
declare const FormControlPresets: (tokens: LensThemeTokens) => FormControlPresetsType;

interface GridPresetsType {
    /**
     * The default layout grid settings for the Lens theme.
     * It sets up the number of columns and column spacing for each breakpoint.
     */
    page: GridProps;
}
declare const GridPresets: (tokens: LensThemeTokens) => GridPresetsType;

interface AtlasListItemTextProps extends Omit<ListItemTextProps, "slotProps"> {
    primary?: string | React.ReactNode;
    secondary?: string | React.ReactNode;
    context?: string | React.ReactNode;
    slotProps?: ListItemTextProps["slotProps"] & {
        context?: TypographyProps;
    };
}
declare function TokenizeAtlasListItemText<T extends LensThemeTokens>(tokens: T): (props: AtlasListItemTextProps) => react_jsx_runtime.JSX.Element;
interface ListPresetsProps {
    components: {
        AtlasListItemText: ReturnType<typeof TokenizeAtlasListItemText>;
    };
}
declare const ListPresets: (tokens: LensThemeTokens) => ListPresetsProps;

declare const FOOTER_COLORS: readonly ["base", "container", "transparent"];
type FooterColor = (typeof FOOTER_COLORS)[number];
declare const FOOTER_PADDING: readonly ["none", "small", "medium", "large"];
type FooterPadding = (typeof FOOTER_PADDING)[number];
/**
 * The props for the Footer component.
 */
interface FooterProps extends PropsWithChildren {
    color?: FooterColor;
    horizontalPadding?: FooterPadding;
    disablePadding?: boolean;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    tertiaryAction?: React.ReactNode;
    divided?: boolean;
}
/**
 * Footer component
 * @param color - Sets background color.
 * @param children - The content of the footer. Will be rendered in the middle of the footer on desktop and at the top on mobile.
 * @param horizontalPadding - Sets the horizontal padding of the footer.
 * @param disablePadding - Disables the padding of the footer.
 * @param primaryAction - The primary action
 * @param secondaryAction - The secondary action
 * @param tertiaryAction - The tertiary action
 * @param divided - If true, adds a divider to the footer.
 * @returns The rendered Footer component.
 */
declare function Footer({ color, horizontalPadding, disablePadding, divided, children, primaryAction, secondaryAction, tertiaryAction, }: FooterProps): react_jsx_runtime.JSX.Element;

type SideSheetVariant = "default" | "ai";
interface AtlasSideSheetHeaderProps extends PropsWithChildren {
    variant?: SideSheetVariant;
    onClose: () => void;
    /**
     * @deprecated Use `title` instead.
     */
    titleText?: string | React__default.ReactNode;
    title: string | React__default.ReactNode;
    headerAction?: React__default.ReactNode;
    componentProps?: {
        root?: BoxProps;
        title?: Partial<TypographyProps>;
        closeButton?: Omit<ButtonProps, "onClick">;
    };
    /**
     * @deprecated Use `componentProps.closeButton` instead.
     */
    closeButtonProps?: Omit<ButtonProps, "onClick">;
}
interface AtlasSideSheetContentProps {
    children: React__default.ReactNode;
    /**
     * The aria-label for the scrollable content region.
     * Defaults to "Content area" if not provided.
     */
    ariaLabel?: string;
}
interface SideSheetPresetsProps {
    components: {
        Header: React__default.FC<AtlasSideSheetHeaderProps>;
        Content: React__default.FC<AtlasSideSheetContentProps>;
        Footer: React__default.FC<FooterProps>;
    };
    size: {
        large: DrawerProps;
        medium: DrawerProps;
        small: DrawerProps;
    };
}
declare const SideSheetPresets: (tokens: LensThemeTokens) => SideSheetPresetsProps;

type StatusIndicatorTokens = LensThemeTokens["component"]["statusIndicator"];
type StatusIndicatorColor = keyof StatusIndicatorTokens["colors"];
type StatusIndicatorColorProps = {
    backgroundColor: string;
    color: string;
};
interface StatusIndicatorProps extends Omit<ChipProps, "color"> {
    color?: StatusIndicatorColor;
    customColor?: StatusIndicatorColorProps | ((tokens: LensThemeTokens) => StatusIndicatorColorProps);
    hasShadow?: boolean;
}
declare function StatusIndicator({ color, customColor, hasShadow, ...props }: StatusIndicatorProps): react_jsx_runtime.JSX.Element;
interface StatusIndicatorPresetsProps {
    components: {
        StatusIndicator: React.FC<StatusIndicatorProps>;
    };
}
declare const StatusIndicatorPresets: () => StatusIndicatorPresetsProps;

interface StepperPresetsProps {
    components: {
        LockedStepIcon: React__default.FC<StepIconProps>;
    };
}
declare const StepperPresets: () => StepperPresetsProps;

interface TablePresetsType {
    TableCell: {
        numeric: TableCellProps;
    };
    TablePagination: {
        atlasTablePagination: Partial<TablePaginationProps>;
    };
    components: {
        AtlasTableSortLabel: React.FC<AtlasTableSortLabelProps>;
    };
}
interface AtlasTableSortLabelProps extends TableSortLabelProps {
    sortedAscendingLabel: string;
    sortedDescendingLabel: string;
}
declare const TablePresets: () => TablePresetsType;

interface AtlasTabScrollButtonProps extends TabScrollButtonProps {
    ariaLabels?: {
        left: string;
        right: string;
    };
}
declare function AtlasTabScrollButton(props: AtlasTabScrollButtonProps): react_jsx_runtime.JSX.Element;
declare const alignToPageHeader: {
    sx: {
        marginLeft: number;
    };
};
interface TabsPresetsProps {
    components: {
        TabScrollButton: typeof AtlasTabScrollButton;
    };
    Tabs: {
        alignToPageHeader: typeof alignToPageHeader;
    };
}
declare const TabsPresets: () => TabsPresetsProps;

interface TooltipPresetsProps {
    size: {
        xs: Partial<TooltipProps>;
    };
}
declare const tooltipPresets: <T extends LensThemeTokens>(tokens: T) => TooltipPresetsProps;

interface LensPresets {
    AccordionPresets: ReturnType<typeof AccordionPresets>;
    AlertPresets: ReturnType<typeof AlertPresets>;
    AvatarPresets: ReturnType<typeof AvatarPresets>;
    BadgePresets: ReturnType<typeof badgePresets>;
    ButtonTilePresets: ReturnType<typeof ButtonTilePresets>;
    CardComponentsPresets: ReturnType<typeof CardComponentsPresets>;
    CircularProgressPresets: ReturnType<typeof CircularProgressPresets>;
    DividerPresets: ReturnType<typeof DividerPresets>;
    DropdownPresets: ReturnType<typeof DropdownPresets>;
    FormControlPresets: ReturnType<typeof FormControlPresets>;
    GridPresets: ReturnType<typeof GridPresets>;
    SideSheetPresets: ReturnType<typeof SideSheetPresets>;
    SplitButtonPresets: ReturnType<typeof splitButtonPresets>;
    StatusIndicatorPresets: ReturnType<typeof StatusIndicatorPresets>;
    StepperPresets: ReturnType<typeof StepperPresets>;
    TablePresets: ReturnType<typeof TablePresets>;
    AutocompletePresets: ReturnType<typeof autocompletePresets>;
    TabsPresets: ReturnType<typeof TabsPresets>;
    ListPresets: ReturnType<typeof ListPresets>;
    ChipPresets: ReturnType<typeof chipPresets>;
    TooltipPresets: ReturnType<typeof tooltipPresets>;
}
interface LensColor {
    950: string;
}
interface LensTypeBackground {
    container: string;
    navSelection: string;
}
interface TonalPalette {
    0: string;
    10: string;
    20: string;
    25: string;
    30: string;
    35: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    95: string;
    98: string;
    99: string;
    100: string;
}
interface LensPalette {
    destructive: SimplePaletteColorOptions;
    dividerSecondary: string;
    new: string;
    processing: SimplePaletteColorOptions;
    green: TonalPalette;
    blue: TonalPalette;
    yellow: TonalPalette;
    purple: TonalPalette;
    red: TonalPalette;
}
interface LensPaletteOptions {
    destructive: SimplePaletteColorOptions;
    new: string;
    dividerSecondary: string;
    processing: SimplePaletteColorOptions;
    green: TonalPalette;
    blue: TonalPalette;
    yellow: TonalPalette;
    purple: TonalPalette;
    red: TonalPalette;
}
interface LensBreakpointOverrides {
    xs: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
}
interface LensThemeOptions {
    atlasThemeName: "lens";
    tokens: LensThemeTokens;
    presets: Presets & LensPresets;
}
interface LensTheme {
    atlasThemeName: "lens";
    tokens: LensThemeTokens;
    presets: Presets & LensPresets;
}
interface LensAlertPropsVariantsOverrides {
    divided: true;
}
interface LensAlertPropsColorOverrides {
    ai: true;
    processing: true;
}
interface LensButtonPropsColorOverrides {
    destructive: true;
    ai: true;
    secondary: false;
    error: false;
    info: false;
    success: false;
    warning: false;
}
interface LensChipPropsSizeOverrides {
    small: true;
    medium: false;
    large: true;
}
interface LensChipPropsVariantOverrides {
    shape: true;
}
interface LensIconButtonPropsColorOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    primaryDestructive: true;
    secondaryDestructive: true;
    tertiaryDestructive: true;
    error: false;
    info: false;
    success: false;
    warning: false;
}
interface LensFormControlPropsSizeOverrides {
    small: false;
}
interface LensFormControlPropsColorOverrides {
    primary: true;
    secondary: false;
    error: true;
    info: false;
    success: false;
    warning: false;
    ai: true;
}
interface LensInputBasePropsSizeOverrides {
    small: false;
    medium: true;
}
interface LensInputBasePropsColorOverrides {
    primary: true;
    secondary: false;
    error: true;
    info: false;
    success: false;
    warning: false;
    ai: true;
}
interface LensListItemComponentsPropsOverrides {
    comfortable: boolean;
}
interface LensPaginationPropsColorOverrides {
    primary: false;
    secondary: false;
}
interface LensPaginationPropsSizeOverrides {
    small: false;
    large: false;
}
interface LensPaginationPropsVariantOverrides {
    outlined: false;
}
interface LensPaginationItemPropsColorOverrides {
    primary: false;
    secondary: false;
}
interface LensPaginationItemPropsSizeOverrides {
    small: false;
    large: false;
}
interface LensPaginationItemPropsVariantOverrides {
    outlined: false;
}
interface LensSwitchPropsColorOverrides {
    primary: false;
    secondary: false;
    error: false;
    info: false;
    success: false;
    warning: false;
}
interface LensTextFieldPropsColorOverrides {
    ai: true;
}
interface LensToggleButtonPropsColorOverrides {
    primary: false;
    secondary: false;
    error: false;
    info: false;
    success: false;
    warning: false;
}
interface LensToggleButtonPropsSizeOverrides {
    large: false;
}
interface LensTypographyPropsVariantOverrides {
    textMd: true;
    textSm: true;
    labelLg: true;
    labelSm: true;
    labelXs: true;
    body2: false;
}

declare module "@diligentcorp/atlas-theme-mui-presets" {
    interface Presets extends LensPresets {
    }
}
declare module "@mui/material" {
    interface Color extends LensColor {
    }
}
declare module "@mui/material/styles" {
    interface TypographyVariants {
        textMd: React.CSSProperties;
        textSm: React.CSSProperties;
        labelLg: React.CSSProperties;
        labelSm: React.CSSProperties;
        labelXs: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        textMd?: React.CSSProperties;
        textSm?: React.CSSProperties;
        labelLg?: React.CSSProperties;
        labelSm?: React.CSSProperties;
        labelXs?: React.CSSProperties;
    }
    interface TypeBackground extends LensTypeBackground {
    }
    interface Palette extends LensPalette {
    }
    interface PaletteOptions extends LensPaletteOptions {
    }
    interface Theme extends LensTheme {
    }
    interface ThemeOptions extends LensThemeOptions {
    }
    interface BreakpointOverrides extends LensBreakpointOverrides {
    }
}
declare module "@mui/material/Alert" {
    interface AlertPropsVariantOverrides extends LensAlertPropsVariantsOverrides {
    }
    interface AlertPropsColorOverrides extends LensAlertPropsColorOverrides {
    }
}
declare module "@mui/material/Avatar" {
    interface AvatarPropsVariantOverrides {
        square: false;
    }
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides extends LensButtonPropsColorOverrides {
    }
}
declare module "@mui/material/Chip" {
    interface ChipPropsSizeOverrides extends LensChipPropsSizeOverrides {
    }
    interface ChipPropsVariantOverrides extends LensChipPropsVariantOverrides {
    }
}
declare module "@mui/material/FormControl" {
    interface FormControlPropsColorOverrides extends LensFormControlPropsColorOverrides {
    }
    interface FormControlPropsSizeOverrides extends LensFormControlPropsSizeOverrides {
    }
}
declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides extends LensIconButtonPropsColorOverrides {
    }
}
declare module "@mui/material/InputBase" {
    interface InputBasePropsColorOverrides extends LensInputBasePropsColorOverrides {
    }
    interface InputBasePropsSizeOverrides extends LensInputBasePropsSizeOverrides {
    }
}
declare module "@mui/material/ListItem" {
    interface ListItemComponentsPropsOverrides extends LensListItemComponentsPropsOverrides {
    }
}
declare module "@mui/material/Pagination" {
    interface PaginationPropsColorOverrides extends LensPaginationPropsColorOverrides {
    }
    interface PaginationPropsSizeOverrides extends LensPaginationPropsSizeOverrides {
    }
    interface PaginationPropsVariantOverrides extends LensPaginationPropsVariantOverrides {
    }
}
declare module "@mui/material/PaginationItem" {
    interface PaginationItemPropsColorOverrides extends LensPaginationItemPropsColorOverrides {
    }
    interface PaginationItemPropsSizeOverrides extends LensPaginationItemPropsSizeOverrides {
    }
    interface PaginationItemPropsVariantOverrides extends LensPaginationItemPropsVariantOverrides {
    }
}
declare module "@mui/material/Switch" {
    interface SwitchPropsColorOverrides extends LensSwitchPropsColorOverrides {
    }
}
declare module "@mui/material/TextField" {
    interface TextFieldPropsColorOverrides extends LensTextFieldPropsColorOverrides {
    }
}
declare module "@mui/material/ToggleButton" {
    interface ToggleButtonPropsColorOverrides extends LensToggleButtonPropsColorOverrides {
    }
    interface ToggleButtonPropsSizeOverrides extends LensToggleButtonPropsSizeOverrides {
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides extends LensTypographyPropsVariantOverrides {
    }
}

interface MockAtlasThemeProviderProps extends PropsWithChildren {
    tokenMode?: "lens" | "atlas-light" | "atlas-dark";
}
declare function MockAtlasThemeProvider({ children, tokenMode, }: MockAtlasThemeProviderProps): react_jsx_runtime.JSX.Element;

declare const NAV_STATE: {
    Disabled: string;
    PanelExpanded: string;
    PanelCollapsed: string;
    DialogOpen: string;
    DialogClosed: string;
};
declare const TOGGLE_MODAL_EVENT_NAME: "atlas-gn:toggle-modal";
declare const DISPLAY_MODE_CHANGE_EVENT_NAME: "atlas-gn:display-mode-change";

type NavStateKey = (typeof NAV_STATE)[keyof typeof NAV_STATE];
type ToggleModalEventDetails = {
    open: boolean;
    type: "menu" | "panel" | "dialog";
    close?: () => void;
    originalEvent?: MouseEvent | KeyboardEvent;
};
type DisplayModeChangeEventDetails = {
    oldState: NavStateKey;
    newState: NavStateKey;
};
declare global {
    interface DocumentEventMap {
        [TOGGLE_MODAL_EVENT_NAME]: CustomEvent<ToggleModalEventDetails>;
        [DISPLAY_MODE_CHANGE_EVENT_NAME]: CustomEvent<DisplayModeChangeEventDetails>;
    }
}

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            "mock-hb-global-navigator": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                orgName?: string;
                logo?: string;
                userFullName?: string;
            };
        }
    }
}

interface AppLayoutProps extends PropsWithChildren {
    navigation: ReactNode;
    orgName?: string;
    logo?: string;
    userFullName?: string;
}
declare function AppLayout({ children, navigation, orgName, logo, userFullName, }: AppLayoutProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatBoxActions component.
 */
interface AIChatBoxActionsProps {
    /**
     * Elements to display at the start (left) of the actions row.
     */
    leadingActions?: React.ReactNode;
    /**
     * Elements to display at the end (right) of the actions row.
     */
    trailingActions?: React.ReactNode;
    /**
     * Additional props to pass to the root Stack component.
     */
    stackProps: StackProps;
}

/**
 * Props for the AIChatBoxContainer component.
 */
interface AIChatBoxContainerProps extends PropsWithChildren {
    /**
     * Additional props to pass to the root Stack component.
     */
    stackProps?: StackProps;
    /**
     * Whether the container is in a drag over state.
     */
    isDragOver?: boolean;
}

/**
 * Props for the AIChatBoxDisclaimer component.
 */
interface AIChatBoxDisclaimerProps {
    /**
     * The text to display.
     */
    text?: string;
    /**
     * The text to display for the link.
     */
    linkText?: string;
    /**
     * The href to display for the link.
     */
    href?: string;
    /**
     * Additional props to pass to the root Stack component.
     */
    stackProps?: StackProps;
}

/**
 * Props for the AIChatBoxSubmitButton component.
 */
interface AIChatBoxSubmitButtonProps extends ButtonProps {
    /**
     * The aria label to display for the submit button.
     */
    submitButtonAriaLabel?: string;
    /**
     * The aria label to display for the stop button.
     */
    stopButtonAriaLabel?: string;
    onStop?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Props for the AIChatBoxTextField component.
 */
interface AIChatBoxTextFieldProps {
    /**
     * The value of the text field.
     */
    value?: string;
    /**
     * Callback fired when the input value changes.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The label of the text field.
     */
    label?: string;
    /**
     * The placeholder of the text field.
     */
    placeholder?: string;
    slotProps?: {
        /**
         * Props for the text field.
         */
        textField?: TextFieldProps;
    };
}

/**
 * Props for the AIChatBoxUploadArea component.
 */
interface AIChatBoxUploadAreaProps {
    /**
     * Whether the upload area is visible.
     */
    isVisible?: boolean;
    /**
     * Callback fired when files are changed.
     */
    onFilesChange?: () => void;
    /**
     * The label to display for the drop area.
     */
    dropLabel?: string;
    /**
     * The label to display for the remove file button.
     */
    removeFileLabel?: string;
}
type ExposedUploadAreaProps = Pick<AIChatBoxUploadAreaProps, "dropLabel" | "removeFileLabel">;

/**
 * Props for the AIChatBoxUploadButton component.
 */
interface AIChatBoxUploadButtonProps {
    /**
     * The aria label to display for the upload button.
     */
    ariaLabel?: string;
    /**
     * The accept attribute for the file input.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
     * @example ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
     * @example "application/pdf"
     */
    accept?: string;
    /**
     * Callback fired when files are changed.
     */
    onFileChange?: () => void;
    /**
     * Props for the upload button.
     */
    slotProps?: {
        /**
         * Props for the button.
         */
        button?: ButtonProps;
        /**
         * Props for the file input.
         */
        fileInput?: InputHTMLAttributes<HTMLInputElement>;
    };
}

type SubmitEvent = MouseEvent$1<HTMLButtonElement, globalThis.MouseEvent> | KeyboardEvent$1<HTMLInputElement>;
/**
 * Props for the AIChatBox component.
 */
interface AIChatBoxProps {
    /**
     * Callback fired when the form is submitted.
     * By default, the prompt will be cleared after the submission, and the generating state will be set to true.
     * You can cancel by returning `false`.
     * @param prompt - The prompt to submit.
     * @param event - The event that triggered the submission (can be a mouse event or a keyboard event)
     */
    onSubmit?: (prompt: string, event: SubmitEvent) => void | boolean | Promise<boolean | void>;
    /**
     * Callback fired when the generating state is set to false.
     */
    onStop?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Whether the uploading functionality is available.
     */
    isUploadAvailable?: boolean;
    /**
     * The accepted file types.
     */
    acceptedFileTypes?: string;
    /**
     * Callback fired when files are changed.
     */
    onFilesChange?: () => void;
    /**
     * Elements to display at the start (left) of the actions row.
     */
    leadingActions?: ReactNode;
    /**
     * Elements to display at the end (right) of the actions row.
     */
    trailingActions?: ReactNode;
    /**
     * Content to display below the chat box.
     */
    contentBelow?: ReactNode;
    /**
     * Props for customizing internal components.
     */
    slotProps?: {
        /**
         * Props for the root component.
         */
        root?: StackProps;
        /**
         * Props for the container component.
         */
        container?: AIChatBoxContainerProps;
        /**
         * Props for the text field component.
         */
        textField?: AIChatBoxTextFieldProps;
        /**
         * Props for the actions component.
         */
        actions?: AIChatBoxActionsProps;
        /**
         * Props for the upload button component.
         */
        uploadButton?: AIChatBoxUploadButtonProps;
        /**
         * Props for the submit button component.
         */
        submitButton?: AIChatBoxSubmitButtonProps;
        /**
         * Props for the disclaimer component.
         */
        disclaimer?: AIChatBoxDisclaimerProps;
        /**
         * Props for the upload area component.
         */
        uploadArea?: ExposedUploadAreaProps;
    };
}
/**
 * A component for displaying text input for AI prompts, attachments, and actions.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 *
 * @param props - The props for the AIChatBox component.
 */
declare function AIChatBox({ onSubmit, onStop, isUploadAvailable, acceptedFileTypes, onFilesChange, leadingActions, trailingActions, contentBelow, slotProps, }: AIChatBoxProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatBoxSuggestionsButton component.
 */
interface AIChatBoxSuggestionsButtonProps {
    /**
     * The aria label for the suggestions button.
     * @default "Suggestions"
     */
    ariaLabel?: string;
    /**
     * The label to display on the button.
     * @default "Suggestions"
     */
    label?: string;
    /**
     * Props for customizing internal components.
     */
    slotProps?: {
        /**
         * Props for the button component.
         */
        button?: ButtonProps;
    };
}
/**
 * A button that opens the suggestions menu.
 * Used when no tools are available.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 *
 * @param props - The props for the AIChatBoxSuggestionsButton component.
 */
declare function AIChatBoxSuggestionsButton({ ariaLabel, label, slotProps, }: AIChatBoxSuggestionsButtonProps): react_jsx_runtime.JSX.Element;

/**
 * An object that describes a tool menu item.
 */
interface AIChatBoxToolsMenuItem {
    /**
     * The id of the tool.
     */
    id: string;
    /**
     * The icon to display for the tool.
     */
    icon: ReactElement;
    /**
     * The label to display for the tool.
     */
    label: string;
}
/**
 * Props for the AIChatBoxToolsMenu component.
 */
interface AIChatBoxToolsMenuProps {
    /**
     * The tools to display in the menu.
     */
    tools?: AIChatBoxToolsMenuItem[];
    /**
     * The selected ID of the tool that will be displayed next to the menu as a chip.
     */
    selectedToolId?: string;
    /**
     * A function to get custom props for tool menu items.
     */
    getToolProps?: (item: AIChatBoxToolsMenuItem) => MenuItemProps;
    /**
     * A function to handle tool click events.
     */
    onToolClick?: (item: AIChatBoxToolsMenuItem) => void;
    /**
     * Props for the tools menu.
     */
    slotProps?: {
        /**
         * Props for the root component.
         */
        root?: StackProps;
        /**
         * The label to display for the tools menu.
         */
        toolsMenuLabel?: string;
        /**
         * Props for the tools menu button.
         */
        toolsMenuButton?: ButtonProps;
    };
}
/**
 * A component that displays a list of tools in a dropdown menu.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 *
 * @param props - The props for the AIChatBoxToolsMenu component.
 */
declare function AIChatBoxToolsMenu({ tools, selectedToolId, getToolProps, onToolClick, slotProps, }: AIChatBoxToolsMenuProps): react_jsx_runtime.JSX.Element | null;

/**
 * An object that describes a suggestion menu item.
 */
interface AIChatBoxSuggestionMenuItem {
    /**
     * The id of the suggestion.
     */
    id: string;
    /**
     * The label to display for the suggestion.
     */
    label: string;
}
/**
 * Props for the AIChatBoxSuggestionsMenu component.
 */
interface AIChatBoxSuggestionsMenuProps {
    /**
     * The suggestions to display in the menu.
     *
     * **Constraints:**
     * - Must have at least 3 suggestions
     * - Must have at most 7 suggestions
     *
     * **Note:** If fewer than 3 suggestions are provided, the menu will not be displayed.
     * If more than 7 suggestions are provided, only the first 7 will be shown.
     */
    suggestions?: AIChatBoxSuggestionMenuItem[];
    /**
     * The selected tool. If provided, the header displays the tool icon and label.
     * If not provided, the header displays a generic label.
     */
    selectedTool?: AIChatBoxToolsMenuItem;
    /**
     * Callback fired when a suggestion is clicked.
     */
    onSuggestionClick?: (suggestion: AIChatBoxSuggestionMenuItem) => void;
    /**
     * Callback fired when the menu should close.
     */
    onClose?: () => void;
    /**
     * A function to get custom props for suggestion menu items.
     */
    getSuggestionProps?: (item: AIChatBoxSuggestionMenuItem) => MenuItemProps;
    /**
     * Props for customizing internal components.
     */
    slotProps?: {
        /**
         * Props for the Popper component.
         */
        popper?: Partial<PopperProps>;
        /**
         * Props for the Paper component.
         */
        paper?: PaperProps;
        /**
         * Props for the menu header component.
         */
        suggestionsMenuHeader?: ListSubheaderProps;
        /**
         * The label to display in the header when no tool is selected.
         */
        suggestionsLabel?: string;
    };
}
/**
 * A floating menu that displays suggestions above the chat box.
 * Shows tool-specific suggestions when a tool is selected, or general suggestions otherwise.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 *
 * @param props - The props for the AIChatBoxSuggestionsMenu component.
 */
declare function AIChatBoxSuggestionsMenu({ suggestions, selectedTool, onSuggestionClick, onClose, getSuggestionProps, slotProps, }: AIChatBoxSuggestionsMenuProps): react_jsx_runtime.JSX.Element | null;

/**
 * An object that describes a tool suggestion.
 */
interface AIChatBoxToolSuggestion {
    /**
     * The id of the suggestion.
     */
    id: string;
    /**
     * The icon to display with the suggestion.
     */
    icon?: ReactElement;
    /**
     * The label to display with the suggestion.
     */
    label: string;
}
/**
 * A function to get custom props for suggestions.
 * Can be either a function that returns ChipProps or MenuItemProps depending on the type.
 */
interface GetSuggestionPropsCallback {
    (type: "chip", suggestion: AIChatBoxToolSuggestion): ChipProps;
    (type: "menuItem", suggestion: AIChatBoxToolSuggestion): MenuItemProps;
}
/**
 * Props for the AIChatBoxToolSuggestions component.
 */
interface AIChatBoxToolSuggestionsProps {
    /**
     * The suggestions to display.
     */
    suggestions?: AIChatBoxToolSuggestion[];
    /**
     * Callback function to get custom props for suggestions.
     */
    getSuggestionProps?: GetSuggestionPropsCallback;
    /**
     * Callback function to handle suggestion click.
     */
    onSuggestionClick?: (suggestion: AIChatBoxToolSuggestion) => void;
    /**
     * Props for the suggestions component.
     */
    slotProps?: {
        /**
         * Props for the show more button.
         */
        showMoreButton?: ChipProps;
        /**
         * The label to display for the show more button.
         */
        showMoreLabel?: string | ReactNode;
        /**
         * The label to display for the mobile suggestion button.
         */
        mobileSuggestionButtonLabel?: string | ReactNode;
    };
}
/**
 * A component that displays a list of tool suggestions.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 *
 * @param props - The props for the AIChatBoxToolSuggestions component.
 */
declare function AIChatBoxToolSuggestions({ suggestions, onSuggestionClick, getSuggestionProps, slotProps, }: AIChatBoxToolSuggestionsProps): react_jsx_runtime.JSX.Element | null;

/**
 * Props for the AIChatBoxVoiceButton component.
 */
interface AIChatBoxVoiceButtonProps extends ButtonProps {
    /**
     * The aria label to display for the button.
     */
    ariaLabel?: string;
}
/**
 * A component that displays a voice input button.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API will likely change in the future.
 *
 * @param props - The props for the AIChatBoxVoiceButton component.
 */
declare function ChatBoxVoiceButton({ ariaLabel, ...props }: AIChatBoxVoiceButtonProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatContent component.
 */
interface AIChatContentProps extends PropsWithChildren {
}
/**
 * A component that contains the chat content.
 * It typically can contain Timestamp, AIMessage, SystemMessage, and UserMessage components.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatContent({ children }: AIChatContentProps): react_jsx_runtime.JSX.Element;

/**
 * A message from an AI participant.
 * Pass AI Message Block components as children to render the message content.
 */
interface AIChatAIMessageProps extends PropsWithChildren {
    /**
     * The participant header component
     *
     */
    header?: ReactNode;
    /**
     * Footer component
     */
    footer?: ReactNode;
    /**
     * Props for subcomponents.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: StackProps;
    };
}
/**
 * A message from an AI participant.
 * Pass AI Message Block components as children to render the message content.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatAIMessage({ header, children, footer, slotProps }: AIChatAIMessageProps): react_jsx_runtime.JSX.Element;

interface AIChatMessageFooterProps {
    /**
     * The call to action text or component.
     * @example "Do you want me to help you with something else?"
     */
    callToAction?: string | ReactNode;
    /**
     * The leading action buttons to display in the footer.
     * @example (
     * <>
     *   <Button>Regenerate response</Button>
     *   <Button>Share</Button>
     *   <Button>Export</Button>
     * </>
     * )
     */
    leadingActions?: ReactNode;
    /**
     * The trailing action buttons to display in the footer.
     * @example (
     * <>
     *   <IconButton aria-label="Thumbs up"><ThumbsUpIcon aria-hidden={true} /></IconButton>
     *   <IconButton aria-label="Thumbs down"><ThumbsDownIcon aria-hidden={true} /></IconButton>
     * </>
     * )
     */
    trailingActions?: ReactNode;
    /**
     * The suggested actions to display in the footer.
     * @example <AIChatSuggestedActions buttons={<Button>Add more details</Button>} />
     */
    suggestedActions?: ReactNode;
    /**
     * Overrides for sub-components.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: StackProps;
        /**
         * Props for the footer action buttons.
         */
        actions?: StackProps;
        /**
         * Props for the footer call to action.
         */
        callToAction?: TypographyProps;
        /**
         * Props for the footer leading actions.
         */
        leadingActions?: StackProps;
        /**
         * Props for the footer trailing actions.
         */
        trailingActions?: StackProps;
    };
}
/**
 * Component that displays a footer for a message.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatMessageFooter({ callToAction, leadingActions, trailingActions, suggestedActions, slotProps, }: AIChatMessageFooterProps): react_jsx_runtime.JSX.Element;

/**
 * A definition for a link.
 */
interface LinkDefinition {
    /**
     * The text to display for the link.
     * @example "Website"
     */
    text: string;
    /**
     * The href to display for the link.
     * @example "https://www.example.com"
     */
    href: string;
}
/**
 * Props for the AIChatMessageSourceListBlock component.
 */
interface AIChatMessageSourceListBlockProps {
    /**
     * The links to display in the list.
     * @example [{ text: "Website", href: "https://www.example.com" }]
     */
    links: LinkDefinition[];
    /**
     * The maximum number of links to display.
     * @example 2
     */
    limit?: number;
    /**
     * The label to display above the list.
     * @example "Sources"
     */
    label?: string;
}
/**
 * A block that displays a list of sources that the AI used to generate the message.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatMessageSourceListBlock({ links, limit, label, }: AIChatMessageSourceListBlockProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatSuggestedActions component.
 */
interface AIChatSuggestedActionsProps {
    /**
     * The buttons to display in the suggested actions.
     * @example <><Button>Add more details</Button><Button>Add a file</Button></>
     */
    buttons: ReactNode;
    /**
     * The label to display above the suggested actions.
     * @example "Suggested actions"
     */
    label?: string;
    /**
     * Overrides for sub-components.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: StackProps;
        /**
         * Props for the label.
         */
        label?: TypographyProps;
        /**
         * Props for the buttons.
         */
        buttons?: StackProps;
    };
}
/**
 * Component that displays suggested actions for a message.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatSuggestedActions({ buttons, label, slotProps, }: AIChatSuggestedActionsProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatMessageTextBlock component.
 */
interface AIChatMessageTextBlockProps {
    /**
     * The text to display.
     */
    children?: string;
}
/**
 * A block that displays a text message.
 * Text is rendered using Markdown.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatMessageTextBlock({ children }: AIChatMessageTextBlockProps): react_jsx_runtime.JSX.Element;

declare const THINKING_INDICATOR_SURFACES: readonly ["variant", "transparent"];
/**
 * Surface variant for the thinking indicator chip.
 * Controls the background color of the chip.
 *
 * - `variant`: Uses `semantic.color.surface.variant`
 * - `transparent`: Transparent background
 */
type ThinkingIndicatorSurface = (typeof THINKING_INDICATOR_SURFACES)[number];
/**
 * Props for the AIChatThinkingIndicator component.
 */
interface AIChatThinkingIndicatorProps {
    /**
     * The label to display for the thinking indicator.
     * @example "Thinking"
     */
    label?: string;
    /**
     * Description text to display next to the label.
     * Typically used for time or status information.
     * @example "3 minutes"
     */
    description?: string;
    /**
     * Surface variant that controls the background color.
     * - `variant`: Uses `semantic.color.surface.variant`
     * - `transparent`: Transparent background
     *
     * If not provided, defaults to `semantic.color.surface.default`.
     */
    surface?: ThinkingIndicatorSurface;
    /**
     * Props for the chip component.
     */
    chipProps?: ChipProps;
}
/**
 * Component that displays a thinking indicator for a message.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatThinkingIndicator({ label, description, surface, chipProps, }: AIChatThinkingIndicatorProps & {
    surface?: ThinkingIndicatorSurface | "default";
}): react_jsx_runtime.JSX.Element;

/**
 * A system message.
 * This is used to display a message from the system.
 */
interface AIChatSystemMessageProps {
    /**
     * The name of the participant who is involved in the message.
     */
    name?: string;
    /**
     * The link of the participant who is involved in the message.
     */
    link?: string;
    /**
     * The title of the participant who is involved in the message.
     */
    title?: string;
    /**
     * The description of the message.
     */
    description: string;
    /**
     * Props for the root element.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: TypographyProps;
        /**
         * Props for the participant link.
         */
        participantLink?: LinkProps;
        /**
         * Props for the participant name.
         */
        participantName?: TypographyProps;
        /**
         * Props for the participant title.
         */
        participantTitle?: TypographyProps;
        /**
         * Props for the description.
         */
        description?: TypographyProps;
    };
}
/**
 * A system message.
 * This is used to display a message from the system and can contain a participant link and title.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatSystemMessage({ name, link, title, description, slotProps, }: AIChatSystemMessageProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatTimestamp component.
 */
interface AIChatTimestampProps {
    time: string;
}
/**
 * A timestamp component that displays the date.
 * It is used to display the beginning of a conversation.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatTimestamp({ time }: AIChatTimestampProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatUserMessage component.
 */
interface AIChatUserMessageProps {
    /**
     * The participant header component
     */
    header: ReactNode;
    /**
     * Alignment of the message
     */
    alignment: "start" | "end";
    /**
     * The message content.
     */
    message: string;
    /**
     * Props for the root element.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: StackProps;
    };
}
/**
 * A message from a user participant.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatUserMessage({ header, alignment, message, slotProps, }: AIChatUserMessageProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AIChatMessageAvatar component.
 */
interface AIChatMessageAvatarProps {
    /**
     * A unique id that will be used to calculate the avatar's background color.
     * @example "john.doe@example.com", "user123"
     */
    uniqueId: string;
    /**
     * Image URL for the avatar.
     * @example "https://example.com/avatar.jpg"
     */
    imageUrl?: string;
    /**
     * The initials that will be displayed in the avatar if no image is provided.
     * @example "AB"
     */
    initials: string;
    /**
     * Overrides for the avatar component.
     */
    avatarProps?: AvatarProps;
}
/**
 * A component that displays a chat participant's avatar.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatMessageAvatar({ imageUrl, initials, uniqueId, avatarProps, }: AIChatMessageAvatarProps): react_jsx_runtime.JSX.Element;

interface AIChatMessageHeaderProps extends PropsWithChildren {
    /**
     * Name of the participant
     * @example "John Doe" or "AI Assistant"
     */
    name: string;
    /**
     * Title of the participant
     * @example "Head of Compliance"
     */
    title?: string;
    /**
     * Link to the participant's profile in the application
     * @example "/profile/john-doe"
     */
    link?: string;
    /**
     * The time of the message
     * @example "12:00 PM"
     */
    time: string;
    /**
     * The avatar component
     * @example <AIChatParticipantAvatar uniqueId="john.doe@example.com" initials="JD" />
     */
    avatar?: ReactNode;
    /**
     * Overrides for sub-components.
     */
    slotProps?: {
        /**
         * Props for the root element.
         */
        root?: StackProps;
        /**
         * Props for the name.
         */
        name?: TypographyProps;
        /**
         * Props for the time.
         */
        time?: TypographyProps;
    };
}
/**
 * Component that displays a header for a message.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatMessageHeader({ name, time, avatar, children, slotProps, }: AIChatMessageHeaderProps): react_jsx_runtime.JSX.Element;

type ContextPanelWidth = "narrow" | "wide" | `${number}px`;
/**
 * Status of a file in the upload process
 */
type FileUploadStatus = "uploading" | "uploaded" | "error";
/**
 * File item with upload status tracking
 */
interface FileUploadItem {
    file: File;
    id: string;
    /**
     * Upload/processing status.
     */
    status: FileUploadStatus;
}
/**
 * Actions that can be performed on the suggestions menu.
 */
interface SuggestionsMenuActions {
    /**
     * Focus the first item in the suggestions menu.
     */
    focusFirstItem: () => void;
    /**
     * Focus the last item in the suggestions menu.
     */
    focusLastItem: () => void;
}
interface AIChatContextType {
    prompt: string;
    setPrompt: Dispatch<SetStateAction<string>>;
    isGenerating: boolean;
    setIsGenerating: Dispatch<SetStateAction<boolean>>;
    /**
     * The ID of the currently selected tool.
     */
    selectedToolId: string | undefined;
    /**
     * Set the selected tool ID.
     */
    setSelectedToolId: Dispatch<SetStateAction<string | undefined>>;
    /**
     * Whether the suggestions menu is open.
     */
    isSuggestionsMenuOpen: boolean;
    /**
     * Set whether the suggestions menu is open.
     */
    setIsSuggestionsMenuOpen: Dispatch<SetStateAction<boolean>>;
    /**
     * Ref to the chat box element for positioning the suggestions menu.
     */
    chatBoxRef: RefObject<HTMLDivElement | null>;
    /**
     * Ref to access suggestions menu actions (focus methods).
     */
    suggestionsMenuActionsRef: RefObject<SuggestionsMenuActions | null>;
    /**
     * Array of files with upload status tracking.
     * @see FileUploadItem
     */
    files: FileUploadItem[];
    /**
     * Set files state directly.
     */
    setFiles: Dispatch<SetStateAction<FileUploadItem[]>>;
    /**
     * Add files from FileList with 'uploading' status.
     * @param files - FileList from input or drag-drop
     */
    addFiles: (files: FileList) => void;
    /**
     * Update upload status of a specific file by ID.
     * @param id - File ID
     * @param status - New status ('uploading' | 'uploaded' | 'error')
     */
    updateFileStatus: (id: string, status: FileUploadStatus) => void;
    /**
     * Remove a file by its ID.
     * @param id - File ID to remove
     */
    removeFile: (id: string) => void;
    hasStartedChat: boolean;
    setHasStartedChat: (value: boolean) => void;
    activeContextPanelTab: string;
    setActiveContextPanelTab: Dispatch<SetStateAction<string>>;
    isContextPanelOpen: boolean;
    setIsContextPanelOpen: Dispatch<SetStateAction<boolean>>;
    contextPanelWidth: ContextPanelWidth;
    setContextPanelWidth: Dispatch<SetStateAction<ContextPanelWidth>>;
}
declare const AIChatContext: React$1.Context<AIChatContextType | undefined>;
declare function useAIChatContext(): AIChatContextType;
interface AIChatContextProviderProps extends PropsWithChildren {
    initialPrompt?: string;
    initialIsGenerating?: boolean;
    initialSelectedToolId?: string;
    initialIsSuggestionsMenuOpen?: boolean;
    initialFiles?: FileUploadItem[];
    initialHasStartedChat?: boolean;
    initialActiveContextPanelTab?: string;
    initialIsContextPanelOpen?: boolean;
    initialContextPanelWidth?: ContextPanelWidth;
}
declare function AIChatContextProvider({ children, initialPrompt, initialIsGenerating, initialSelectedToolId, initialIsSuggestionsMenuOpen, initialFiles, initialHasStartedChat, initialActiveContextPanelTab, initialIsContextPanelOpen, initialContextPanelWidth, }: AIChatContextProviderProps): react_jsx_runtime.JSX.Element;

type PresentationMode = "fullscreen" | "docked" | "floating" | "minimized";

interface CollapseButtonProps {
    onCollapse?: (fromPresentationMode: PresentationMode) => void;
    ariaLabel?: string;
}

interface ExpandButtonProps {
    toPresentationMode: PresentationMode;
    onExpand?: (toPresentationMode: PresentationMode) => void;
    ariaLabel?: string;
}

interface ResizeHandleProps {
    ariaLabel?: string;
}

/**
 * A component for displaying the chat panel.
 * This is the main component for the chat panel.
 */
interface AIChatPanelProps {
    /**
     * The chat box component.
     */
    chatBox: ReactNode;
    /**
     * The chat content component.
     */
    chatContent: ReactNode;
    title?: string;
    subtitle?: string;
    /**
     * Assistant settings - displayed in minimized mode.
     */
    assistant: {
        name: string;
        imageUrl: string;
        altText: string;
    };
    slotProps?: {
        title?: TypographyProps;
        resizeHandle?: ResizeHandleProps;
        collapseButton?: Pick<CollapseButtonProps, "ariaLabel" | "onCollapse">;
        expandButton?: Pick<ExpandButtonProps, "ariaLabel" | "onExpand">;
    };
}
/**
 * A component for displaying an AI chat panel.
 * It wraps the chat box and chat content components.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatPanel({ title, subtitle, chatBox, chatContent, assistant, slotProps, }: AIChatPanelProps): react_jsx_runtime.JSX.Element;

/**
 * A component for displaying the chat UI.
 * This is the main component for the chat UI.
 */
interface AIChatUIProps {
    /**
     * The chat box component.
     */
    chatBox: ReactNode;
    /**
     * The chat content component.
     */
    chatContent: ReactNode;
    title?: string;
    subtitle?: string;
}
/**
 * A component for displaying the chat UI.
 * It wraps the chat box and chat content components, handles the scroll state, and applies the necessary animations.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIChatUI({ title, subtitle, chatBox, chatContent }: AIChatUIProps): react_jsx_runtime.JSX.Element;

/**
 * Base props shared by all variants.
 */
interface AIDisclaimerBaseProps extends PropsWithChildren {
    /**
     * The alignment of the disclaimer.
     */
    alignment?: "start" | "end";
    /**
     * Additional props to pass to internal components.
     */
    slotProps?: {
        /**
         * Additional props to pass to the root Stack component.
         */
        root?: StackProps;
        /**
         * Additional props to pass to the text Typography component.
         */
        text?: TypographyProps;
    };
}
/**
 * Props for the badge variant (with icon and optional BETA label).
 */
interface AIDisclaimerBadgeProps extends AIDisclaimerBaseProps {
    /**
     * The visual variant of the disclaimer.
     * - "badge": Shows a default "Generated by AI" text with sparkle icon
     */
    variant?: "badge";
    /**
     * Configuration for the BETA label.
     */
    beta?: {
        /**
         * Whether to display the "BETA" label alongside the disclaimer text.
         */
        isBeta?: boolean;
        /**
         * The text to display for the BETA label.
         * @default "BETA"
         */
        text?: string;
    };
    /** Not applicable for badge variant. */
    learnMore?: never;
}
/**
 * Props for the disclosure variant (with learn more link, no icon).
 */
interface AIDisclaimerDisclosureProps extends AIDisclaimerBaseProps {
    /**
     * The visual variant of the disclaimer.
     * - "disclosure": Shows "AI-generated content may have inaccuracies. Learn more" with a configurable link (no icon)
     */
    variant: "disclosure";
    /**
     * Configuration for the "Learn more" link.
     */
    learnMore?: {
        /**
         * The URL for the "Learn more" link.
         */
        href?: string;
        /**
         * The text to display for the "Learn more" link.
         * @default "Learn more"
         */
        text?: string;
    };
    /** Not applicable for disclosure variant. */
    beta?: never;
}
/**
 * Discriminated union of all variant prop types.
 */
type AIDisclaimerProps = AIDisclaimerBadgeProps | AIDisclaimerDisclosureProps;
/**
 * A component for displaying an AI disclaimer text and an icon.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIDisclaimer({ children, alignment, variant, beta, learnMore, slotProps, }: AIDisclaimerProps): react_jsx_runtime.JSX.Element;

declare const aiGlowClasses: {
    root: string;
};
/**
 * A component for displaying an AI glow effect.
 *
 * **⚠️ Experimental!**
 * This component is experimental and the API may change in the future.
 */
declare function AIGlow(props: BoxProps): react_jsx_runtime.JSX.Element;

type IconSizeKey = keyof LensThemeTokens["semantic"]["iconSize"];
interface AILoadingIndicatorProps extends BoxProps {
    size?: IconSizeKey;
}
declare function AILoadingIndicator({ size, ...props }: AILoadingIndicatorProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the Card component.
 */
interface CardProps extends CardProps$1 {
    /**
     * Optional AI gradient border variant.
     * - "ai-top": 1px gradient border on top
     * - "ai-start": 1px gradient border on start (left in LTR, right in RTL)
     * - "ai-around": deprecated, falls back to "ai-start". Will be removed in a future major version.
     */
    color?: "ai-top" | "ai-start" | "ai-around";
}
/**
 * Card component that extends MUI Card with AI gradient border variants.
 *
 * This component is identical to MUI Card in function and API, but extends props
 * with an optional `color` prop to render AI gradient border variants.
 */
declare function Card({ color, sx, ...cardProps }: CardProps): react_jsx_runtime.JSX.Element;

type DragAndDropItem = {
    /**
     * The unique identifier of the item.
     * This is used to identify the item in the drag and drop component.
     * It is important that this value is unique.
     * If the items are not unique, the drag and drop component will not work as expected.
     */
    id: string;
    /**
     * The content of the item can be of any type.
     * This allows us to have flexibility in the content that is displayed and be able
     * to handle it from outside the component.
     */
    content: React.ReactNode;
};
type DragAndDropProps = {
    /**
     * The items that will be displayed in the drag and drop component
     */
    items: DragAndDropItem[];
    /**
     * This function receives the new order of the items in the first parameter
     * and the result of the drag and drop if you want to have more control over
     * the event.
     *
     * @param orderedItems - The items in the new order
     * @param result - The result of the drag and drop
     */
    onDragEnd?: (orderedItems: DragAndDropItem[], result: DropResult) => void;
    /**
     * This function is called when the drag starts.
     *
     * @param event - The drag start event
     * @param provider - The responder provided
     */
    onDragStart?: (event: DragStart, provider: ResponderProvided) => void;
    /**
     * Indicates if the drag and drop component is disabled.
     * This will prevent the user from dragging the items and also hides the
     * drag and drop icon.
     */
    isDisabled?: boolean;
};
type DragAndDropPlaceholderType = {
    clientHeight: number;
    clientWidth: number;
    clientY: number;
    clientX: number;
};
/**
 * Drag and Drop component
 */
declare function DragAndDrop({ items, isDisabled, onDragEnd, onDragStart, }: DragAndDropProps): JSX.Element;

interface DropZoneProps extends Omit<StackProps, "children"> {
    /**
     * Whether the drop zone is currently being dragged over.
     */
    isDragging?: boolean;
    /**
     * Whether the drop zone is in an error or warning state.
     */
    state?: "warning" | "error";
    /**
     * Error  or warning message to display when state is defined.
     */
    message?: string;
    /**
     * Content to display inside the drop zone.
     */
    children?: ReactNode;
}
declare function DropZone(props: DropZoneProps): react_jsx_runtime.JSX.Element;

interface FilterToolbarProps {
    search?: ReactNode;
    dropdowns?: ReactNode;
    buttons?: ReactNode;
    actions?: ReactNode;
    selectedItems?: string | ReactNode;
    slotProps?: {
        root?: StackProps;
        fields?: StackProps;
        buttons?: StackProps;
        selectedItems?: TypographyProps;
    };
}
declare const filterToolbarClasses: {
    root: string;
    fields: string;
    buttons: string;
    selectedItems: string;
};
declare function FilterToolbar(props: FilterToolbarProps): JSX.Element;

type TruncationPosition = "start" | "end" | "both";
type StepData = {
    label: string;
    optional?: boolean;
    locked?: boolean;
    completed?: boolean;
};
/** Props for the LinearStepper component. */
interface LinearStepperProps {
    /**
     * Array of step data, each containing a label and optional properties (completed, locked, optional).
     */
    steps: StepData[];
    /**
     * Index of the currently active step.
     */
    activeStepIndex: number;
    /**
     * If true, allows non-linear navigation between steps.
     */
    nonLinear?: boolean;
    /**
     * If true, displays navigation buttons (Back, Next, etc.).
     */
    hasButton?: boolean;
    /**
     * Determines the truncation position for steps: "start", "end", or "both".
     */
    truncation?: TruncationPosition;
    /**
     * If truncation is used, this prop defines the number of steps to show after truncation
     */
    shownStepsAfterTruncation?: number;
    /**
     * Set it to false to disable the "Next" or "Finish" buttons.
     */
    allowNext?: boolean;
    /**
     * Label for completed steps. Default is "Completed".
     */
    completedLabel?: string;
    /**
     * Label for the current step. Default is "Current".
     */
    currentLabel?: string;
    /**
     * Label for locked steps. Default is "Locked".
     */
    lockedLabel?: string;
    /**
     * Label for the truncation button. Default is "More options".
     */
    truncationLabel?: string;
    /**
     * Label for the "Back" button. Default is "Back".
     */
    backLabel?: string;
    /**
     * Label for the "Skip" button. Default is "Skip".
     */
    skipLabel?: string;
    /**
     * Label for the "Next" button. Default is "Next".
     */
    nextLabel?: string;
    /**
     * Label for the "Finish" button. Default is "Finish".
     */
    finishLabel?: string;
    /**
     * Orientation of the stepper. Default is "horizontal".
     */
    orientation?: "horizontal" | "vertical";
    /**
     * Callback function triggered when the active step changes.
     *
     * @param index - The index of the new active step.
     * @param prevCompleted - `false`, if the navigation happened via the "Skip" or "Back" button.
     */
    onChange?: (index: number, prevCompleted: boolean) => void;
    /**
     * Callback function triggered when the Finish button was used.
     */
    onFinish?: () => void;
}
declare function LinearStepper({ steps, activeStepIndex, nonLinear, hasButton, truncation, shownStepsAfterTruncation, allowNext, completedLabel, currentLabel, lockedLabel, truncationLabel, backLabel, skipLabel, nextLabel, finishLabel, orientation, onChange, onFinish, }: LinearStepperProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    id: string;
    label: string;
    isCurrent?: boolean;
}
/**
 * The props for the OverflowBreadcrumbs component.
 */
interface OverflowBreadcrumbsProps<TItem extends BreadcrumbItem> extends Omit<BreadcrumbsProps, "maxItems" | "separator" | "children"> {
    /** Items to display in the breadcrumbs. */
    items: TItem[];
    /** Function to render each item in the breadcrumbs. */
    children: (item: TItem, transformedItem?: {
        label: string;
        truncatedLabel: string;
    }) => React__default.ReactNode;
    /** (Laptop and desktop devices) Maximum number of breadcrumbs to display before overflowing. */
    maxItems?: number;
    /** (Tablet devices) Maximum number of breadcrumbs to display before overflowing. */
    maxItemsTablet?: number;
    /** (Mobile devices) Maximum number of breadcrumbs to display before overflowing. */
    maxItemsMobile?: number;
    /** Props passed to the Menu button component. */
    menuButtonProps?: Omit<ButtonProps, "children" | "onClick">;
    /** Props passed to the Menu component. */
    menuProps?: Omit<MenuProps, "children" | "open" | "onClose">;
    /** The leadingElement of the breadcrumbs. */
    leadingElement?: React__default.ReactNode;
    /** Visually hide the last item in the breadcrumbs. The last item will still be accessible to screen readers. */
    hideLastItem?: boolean;
    /** Truncate long breadcrumbs with an ellipsis and display in a tooltip. */
    truncate?: boolean;
}
/**
 * A wrapper around the MUI Breadcrumbs component that adds overflow handling.
 * @param {OverflowBreadcrumbsProps} props - The props for the component.
 */
declare function OverflowBreadcrumbs<TItem extends BreadcrumbItem>({ children, maxItems, maxItemsTablet, maxItemsMobile, hideLastItem, menuButtonProps, menuProps, leadingElement, truncate, items, ...moreProps }: OverflowBreadcrumbsProps<TItem>): react_jsx_runtime.JSX.Element | null;

interface PageHeaderProps {
    /**
     * The heading text for the component.
     * If the title is a string, it will be wrapped in a Typography component.
     * If the title is a React node, it will be rendered as is.
     */
    pageTitle?: React__default.ReactNode | string;
    /**
     * Whether to truncate the page title text with ellipsis when it overflows.
     * Only applies when pageTitle is a string.
     * @default true
     */
    truncatePageTitle?: boolean;
    /**
     * @deprecated Use `pageSubtitle` instead.
     */
    description?: React__default.ReactNode | string;
    /**
     * The subtitle text for the component.
     * If the subtitle is a string, it will be wrapped in a Typography component.
     * If the subtitle is a React node, it will be rendered as is.
     */
    pageSubtitle?: React__default.ReactNode | string;
    /**
     * The breadcrumbs component.
     * In most cases, this will be an OverflowBreadcrumbs component.
     */
    breadcrumbs?: React__default.ReactNode;
    /**
     * An array of buttons to be rendered in the right side of the header.
     */
    buttonArray?: React__default.ReactNode;
    /**
     * A custom back button component to be rendered in the header.
     * If provided, it will replace the default back button.
     */
    backButton?: React__default.ReactNode;
    /**
     * The more button component.
     */
    moreButton?: React__default.ReactNode;
    /**
     * Avatar component to render to the left of the title
     */
    avatar?: React__default.ReactNode;
    /**
     * The status indicator component.
     */
    statusIndicator?: React__default.ReactNode;
    /**
     * The props for the container Stack component.
     */
    containerProps?: StackProps;
    /**
     * Slot props for customizing subcomponents.
     */
    slotProps?: {
        /**
         * The props for customizing the default back button.
         */
        backButton?: ButtonProps;
        /**
         * Additional props to customize the default page title component.
         */
        pageTitle?: TypographyProps;
        /**
         * Additional props to customize the default page subtitle component.
         */
        pageSubtitle?: TypographyProps;
    };
    /**
     * @deprecated Use `slotProps.backButton` instead.
     * The props for the default back button.
     */
    onBackButtonProps?: ButtonProps;
    /**
     * @deprecated Use `slotProps.backButton.onClick` instead.
     * The event handler for the default back button click.
     */
    onBackAction?: () => void;
}
/**
 * Renders a custom page header component.
 * @returns The rendered component.
 */
declare function PageHeader({ pageTitle, truncatePageTitle, statusIndicator, breadcrumbs, backButton, description, pageSubtitle, buttonArray, moreButton, avatar, containerProps, slotProps, onBackButtonProps, onBackAction, }: PageHeaderProps): react_jsx_runtime.JSX.Element;

interface PopoverContentProps {
    title?: ReactNode;
    onClose?: () => void;
    children: ReactNode;
    startAdornment?: ReactNode;
    primaryAction?: ReactNode;
    secondaryAction?: ReactNode;
    footerStartAdornment?: ReactNode;
    closeButtonAriaLabel?: string;
}
declare function PopoverContent({ title, onClose, children, footerStartAdornment, primaryAction, secondaryAction, closeButtonAriaLabel, }: PopoverContentProps): react_jsx_runtime.JSX.Element;

type HeadingLevels = keyof LensThemeTokens["component"]["sectionHeader"]["heading"];
interface BaseSectionHeaderProps extends PropsWithChildren {
    /**
     * The title of the section header.
     * If the title is a string, it will be wrapped in a Typography component.
     */
    title: ReactNode;
    /**
     * The heading level of the title.
     * Used to determine the font size and weight of the title and subtitle.
     */
    headingLevel?: HeadingLevels;
    /**
     * The subtitle of the section header.
     * If the subtitle is a string, it will be wrapped in a Typography component.
     * When the subtitle is provided, it will be rendered within an `hgroup` element.
     */
    subtitle?: ReactNode;
    /**
     * The content to be rendered before the title. This can be any React node.
     */
    leadingContent?: ReactNode;
    /**
     * The content to be rendered on the left end of the right side of the header.
     * This can be any React node.
     */
    trailingContent?: ReactNode;
    /**
     * The content to be rendered on the right end of the right side of the header.
     * This can be any React node.
     */
    buttonArray?: ReactNode;
    /**
     * The content to be rendered below the title and subtitle. This can be any React node.
     */
    toolbar?: ReactNode;
    slotProps?: {
        /** Props for the container Stack component */
        root?: StackProps;
        /** Props for the header bar Stack component */
        headerBar?: StackProps;
        /** Props for the title Typography component */
        title?: TypographyProps;
        /** Props for the subtitle Typography component */
        subtitle?: TypographyProps;
    };
}
interface ExpandableSectionHeaderProps extends BaseSectionHeaderProps {
    /**
     * Whether the section header is expandable.
     * If true, the expand button will be displayed.
     * If false, but children are present, the children will be displayed.
     */
    isExpandable: boolean;
    /**
     * Whether the section header is expanded.
     * If true, the children will be displayed.
     */
    isExpanded: boolean;
    /**
     * A translated string for the expand button aria label.
     * This will be used for accessibility purposes.
     */
    expandButtonAriaLabel: string;
    /**
     * Callback function to be called when the expand button is clicked.
     */
    onExpand?: () => void;
    /**
     * Callback function to be called when the collapse button is clicked.
     */
    onCollapse?: () => void;
    slotProps?: BaseSectionHeaderProps["slotProps"] & {
        /** Props for the expand button IconButton */
        expandButton?: IconButtonProps;
        /** Props for the expandable container Stack component */
        expandableContainer?: StackProps;
    };
}
type SectionHeaderProps = BaseSectionHeaderProps | ExpandableSectionHeaderProps;
declare const sectionHeaderClasses: {
    readonly root: "AtlasSectionHeader-root";
    readonly headerBar: "AtlasSectionHeader-headerBar";
    readonly headings: "AtlasSectionHeader-headings";
    readonly leadingItems: "AtlasSectionHeader-leadingItems";
    readonly trailingItems: "AtlasSectionHeader-trailingItems";
    readonly content: "AtlasSectionHeader-content";
    readonly expandButton: "AtlasSectionHeader-expandButton";
};
/**
 * The `<SectionHeader />` component is a flexible and reusable component that can be used to create
 * section headers in a variety of contexts.
 *
 * - When `title` and `subtitle` are both passed, the component will render them in an `<hgroup>` element.
 * - When `children` are passed, the component will render a `<section>` element.
 * - When the component is expandable, it will render an expand button and only show `children` when expanded.
 * - When the component is not expandable, it will **always** show `children`.
 * - The component expects `isExpanded` to be controlled by the parent component. It does not manage its own state.
 * - The component can also render a leading content on the left side of the title,
 *   trailing content on the right side of the title, and a button array.
 * - The component can also render a toolbar below the title and subtitle.
 */
declare function SectionHeader(props: SectionHeaderProps): react_jsx_runtime.JSX.Element | null;

export { AIChatAIMessage, type AIChatAIMessageProps, AIChatBox, type AIChatBoxActionsProps, type AIChatBoxContainerProps, type AIChatBoxDisclaimerProps, type AIChatBoxProps, type AIChatBoxSubmitButtonProps, type AIChatBoxSuggestionMenuItem, AIChatBoxSuggestionsButton, type AIChatBoxSuggestionsButtonProps, AIChatBoxSuggestionsMenu, type AIChatBoxSuggestionsMenuProps, type AIChatBoxTextFieldProps, AIChatBoxToolSuggestions, type AIChatBoxToolSuggestionsProps, AIChatBoxToolsMenu, type AIChatBoxToolsMenuProps, type AIChatBoxUploadButtonProps, ChatBoxVoiceButton as AIChatBoxVoiceButton, type AIChatBoxVoiceButtonProps, AIChatContent, type AIChatContentProps, AIChatContext, AIChatContextProvider, type AIChatContextType, AIChatMessageAvatar, type AIChatMessageAvatarProps, AIChatMessageFooter, type AIChatMessageFooterProps, AIChatMessageHeader, type AIChatMessageHeaderProps, AIChatMessageSourceListBlock, type AIChatMessageSourceListBlockProps, AIChatMessageTextBlock, type AIChatMessageTextBlockProps, AIChatPanel, type AIChatPanelProps, AIChatSuggestedActions, type AIChatSuggestedActionsProps, AIChatSystemMessage, type AIChatSystemMessageProps, AIChatThinkingIndicator, type AIChatThinkingIndicatorProps, AIChatTimestamp, type AIChatTimestampProps, AIChatUI, type AIChatUIProps, AIChatUserMessage, type AIChatUserMessageProps, AIDisclaimer, type AIDisclaimerProps, AIGlow, AILoadingIndicator, type AILoadingIndicatorProps, AppLayout, MockAtlasThemeProvider as AtlasThemeProvider, type BreadcrumbItem, Card, DragAndDrop, type DragAndDropItem, type DragAndDropPlaceholderType, type DragAndDropProps, DropZone, type DropZoneProps, FilterToolbar, type FilterToolbarProps, Footer, type FooterProps, type CardProps as LensCardProps, type LensTheme, LinearStepper, type LinearStepperProps, OverflowBreadcrumbs, type OverflowBreadcrumbsProps, PageHeader, type PageHeaderProps, PopoverContent, type PopoverContentProps, SectionHeader, type SectionHeaderProps, StatusIndicator, type StatusIndicatorProps, type StepData, aiGlowClasses, filterToolbarClasses, sectionHeaderClasses, useAIChatContext };
