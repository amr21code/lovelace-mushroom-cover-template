import { assign, boolean, object, optional, string } from "superstruct";
import { actionsSharedConfigStruct, ActionsSharedConfig } from "../../shared/config/actions-config";
import {
    appearanceSharedConfigStruct,
    AppearanceSharedConfig,
} from "../../shared/config/appearance-config";
import { entitySharedConfigStruct, EntitySharedConfig } from "../../shared/config/entity-config";
import { lovelaceCardConfigStruct } from "../../shared/config/lovelace-card-config";
import { LovelaceCardConfig } from "../../ha";

export type FreeCoverCardConfig = LovelaceCardConfig &
    EntitySharedConfig &
    AppearanceSharedConfig &
    ActionsSharedConfig & {
        show_buttons_control?: false;
        show_position_control?: false;
        show_tilt_position_control?: false;
        secondary?: string;
    };

export const FreecoverCardConfigStruct = assign(
    lovelaceCardConfigStruct,
    assign(entitySharedConfigStruct, appearanceSharedConfigStruct, actionsSharedConfigStruct),
    object({
        show_buttons_control: optional(boolean()),
        show_position_control: optional(boolean()),
        show_tilt_position_control: optional(boolean()),
        secondary: optional(string()),
    })
);
