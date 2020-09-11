declare interface Scene
{
    enter?: (previous: Scene, ...args) => void;
    leave?: (next: Scene, ...args) => void;
    update?: (dt: number) => void;
    draw?: () => void;
}

declare interface Manager
{
    /**
     * Calls scene:[event] on the active scene if that function exists.
     * Additional arguments are passed to scene.event.
     * 
     * @param event Name of function to call
     * @param args Arguments, passed to event
     */
    emit: (event: string, ...args) => void;
    /**
     * Changes the currently active scene.
     * 
     * @param next New active scene
     */
    enter: (next: Scene, ...args) => void;
    /**
     * Managers use a stack to hold scenes. You can push a scene onto the top of the stack, making it the currently active scene, and then pop it, resuming the previous state where it left off.
     * @param next Scene to set active
     * @param args Arguments for enter() function of this scene
     */
    push: (next: Scene, ...args) => void;
    /**
     * Managers use a stack to hold scenes. You can push a scene onto the top of the stack, making it the currently active scene, and then pop it, resuming the previous state where it left off.
     * 
     * @param args Arguments for leave() function of active scene
     */
    pop: (...args) => void;
    /**
     * Adds code to the LÖVE callbacks to emit events for each callback (previously defined behavior will be preserved). options is an optional table with the following keys:
     *   - include - a list of callbacks to hook into. If this is defined, only these callbacks will be overridden.
     *   - exclude - a list of callbacks not to hook into. If this is defined, all of the callbacks except for these ones will be overridden.  
     */
    hook: (options?: {include?: string[],exclude?:string[]}) => void;
}
/**
 * Roomy is a scene management library for LÖVE. It helps organize game code by the different "screens" in the game, such as the title screen, gameplay screen, and pause screen.
 * 
 * @noSelf
 * @link [Reference](https://github.com/tesselode/roomy)
 */
declare module "roomy"
{
    const roomy:
    {
        /**
         * Returns new screen manager
         */
        new:() => Manager
    };
    export = roomy
}